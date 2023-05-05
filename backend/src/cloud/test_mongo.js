require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const User = require("./../models/user.model")
const Record = require('../models/record.model')

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Connected to Mongo DB')
}).catch(err => console.log(err))


User.find({})
.then(function(data){
    console.log('data:', data)
})
.catch(function(e){
    console.log('error', e)
})

let record = new Record({
    "value" : 35,
    "sensorName" : "air c",
});
record.save((err, record) => {
    if (err) {
        console.error(err);
    } else {
        console.log('New record created:', record);
    }
});


module.exports = mongoose;