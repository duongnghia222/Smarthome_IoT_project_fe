const {addARecord} = require('./record.service');
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', true)


mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Connected to Mongo DB')
}).catch(err => console.log(err))


let result = addARecord({
    "value": 30,
    "sensorName": "air c",
});

console.log(result)