const mongoose = require('mongoose')

const NotificationSchema = new mongoose.Schema({
    description: String,
    userKey: String,
    notificationId: Number,
},{
  timestamps: true,
  collection: "notifications"
})

module.exports = mongoose.model('Notification', NotificationSchema);