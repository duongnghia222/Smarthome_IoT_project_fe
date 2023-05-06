import serial.tools.list_ports
import random
import time
import sys
from Adafruit_IO import MQTTClient

AIO_FEED_IDS = ["bbc-led", "bbc-fan"]

AIO_USERNAME = "duongnghia222"
AIO_KEY = "aio_LuEo18TZupf2ekijugXxHDqqb0f6"


def connected(client):
    print("Ket noi thanh cong...")
    for feed in AIO_FEED_IDS:
        client.subscribe(feed)


def subscribe(client, userdata, mid, granted_qos):
    print("Subcribe thanh cong...")


def disconnected(client):
    print("Ngat ket noi...")
    sys.exit(1)


def message(client, feed_id, payload):
    if feed_id == "bbc-led":
        if payload == "1":
            writeSerial("c")
        if payload == "0":
            writeSerial("d")
    elif feed_id == "bbc-fan":
        if payload == "100":
            print("in 100")
            writeSerial("a")
        if payload == "0":
            writeSerial("b")
    # if isMicrobitConnected:
    #     ser.write((str(payload) + "#").encode())


client = MQTTClient(AIO_USERNAME, AIO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()
client.loop_background()


def getPort():
    ports = serial.tools.list_ports.comports()
    N = len(ports)
    commPort = "None"
    for i in range(0, N):
        port = ports[i]
        strPort = str(port)
        if "USB-SERIAL CH340" in strPort:
            splitPort = strPort.split(" ")
            commPort = (splitPort[0])
    return commPort


isMicrobitConnected = False
if getPort() != "None":
    ser = serial.Serial(port=getPort(), baudrate=115200)
    isMicrobitConnected = True


def processData(data):
    data = data.replace("!", "")
    data = data.replace("#", "")
    splitData = data.split(":")
    if splitData[1] == "TEMP":
        client.publish("bbc-temp", splitData[2])
    if splitData[1] == "HUMID":
        client.publish("bbc-humid", splitData[2])
    if splitData[1] == "LIGHT":
        client.publish("bbc-light", splitData[2])


mess = ""


def readSerial():
    bytesToRead = ser.inWaiting()
    if (bytesToRead > 0):
        global mess
        mess = mess + ser.read(bytesToRead).decode("UTF-8")
        while ("#" in mess) and ("!" in mess):
            start = mess.find("!")
            end = mess.find("#")
            processData(mess[start:end + 1])
            if (end == len(mess)):
                mess = ""
            else:
                mess = mess[end + 1:]


def writeSerial(data):
    ser.write(data.encode())


while True:
    if isMicrobitConnected:
        readSerial()
        # writeSerial("@")
        # time.sleep(2000)
        # writeSerial("-")

    time.sleep(1)
