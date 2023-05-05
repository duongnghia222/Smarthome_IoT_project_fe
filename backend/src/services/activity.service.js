const Activity = require('../models/activity.model')

module.exports = {
    addAnActivity: async (activityInfo) => {
        let activity = new Activity(activityInfo);
        await activity.save();
        return {
            code: 200,
            message: activityInfo
        }
    },
    getAllActivity: async (query) => {
        let result = null;
        if (query){
            result = await Activity.find().skip(query.offset).limit(query.limit);
        }else{
            result = await Activity.find();
        }
        return {
            code: 200,
            message: result
        }
    }
}