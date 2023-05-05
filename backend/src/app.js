const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
require('./cloud/mongoDB')
require('dotenv').config()
const key = process.env.KEY
const username = process.env.NAME

const app = express()
const {MQTTAdafruitIO} = require('./utils/adafruit_api')

const options = {
    port: 8883
}
let client = new MQTTAdafruitIO(username,key,options)

client.connect()
client.subscribe('bbc-humid')
client.subscribe('bbc-light')
client.subscribe('bbc-temp')

// add some useful middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//add routes
app.use(require('./routes/user.route'))
app.use(require('./routes/userlogin.route'))
app.use(require('./routes/record.route'))
app.use(require('./routes/activity.route'))
app.use(require('./routes/notification.route'))


function RunServer(){
    app.listen(process.env.PORT || 8080, () => {
        console.log('Server is running in port ' + (process.env.PORT || 8080))
    })
}

module.exports = {RunServer}
