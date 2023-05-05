const Notification = require('../models/notification.model')

module.exports = {
    addANotification: async (notificationInfo) => {
        let notification = new Notification(notificationInfo);
        await notification.save();
        return {
            code: 200,
            message: notificationInfo
        }
    },
    getAllNotification: async (query) => {
        let result = null;
        if (query){
            result = await Notification.find().skip(query.offset).limit(query.limit);
        }else{
            result = await Notification.find();
        }
        return {
            code: 200,
            message: result
        }
    }
}