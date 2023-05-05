const mongoose = require('mongoose')

const ActivitySchema = new mongoose.Schema({
    userKey: String,
    description: String,
    deviceId: Number,
    deviceName: String,
    activityId: Number,
},{
  timestamps: true,
  collection: "activities"
})

module.exports = mongoose.model('Activity', ActivitySchema);