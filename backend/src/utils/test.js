const {MQTTAdafruitIO} = require('./adafruit_api') 

require('dotenv').config()
const key = process.env.KEY
const username = process.env.NAME
const options = {
    port: 8883
}
let client = new MQTTAdafruitIO(username,key,options)

client.connect()
client.subscribe('bbc-temp')