const {addANotification,getAllNotification} = require('../services/notification.service')

module.exports = {
    addANotification: async (req,res) => {
        let notificationInfo = req.body.notificationInfo
        let data = await addANotification(notificationInfo)
        res.status(data.code).json(data.message)
    },
    getAllNotification: async (req,res) => {
        let query = req.query
        let data = await getAllNotification(query)
        res.status(data.code).json(data.message)
    }
}