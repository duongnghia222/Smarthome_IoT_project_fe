const {addAnActivity,getAllActivity} = require('../services/activity.service')

module.exports = {
    addAnActivity: async (req,res) => {
        let activityInfo = req.body.activityInfo
        let data = await addAnActivity(activityInfo)
        res.status(data.code).json(data.message)
    },
    getAllActivity: async (req,res) => {
        let query = req.query
        let data = await getAllActivity(query)
        res.status(data.code).json(data.message)
    }
}