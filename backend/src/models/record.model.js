const mongoose = require('mongoose')

const RecordSchema = new mongoose.Schema({
    value: String,
    sensorName: String,
},{
  timestamps: true,
  collection: "records"
})

module.exports = mongoose.model('Record', RecordSchema);