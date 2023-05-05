const {addARecord,getAllRecord} = require('../services/record.service')

module.exports = {
    addARecord: async (req,res) => {
        let recordInfo = req.body.recordInfo
        let data = await addARecord(recordInfo)
        res.status(data.code).json(data.message)
    },
    getAllRecord: async (req,res) => {
        let query = req.query
        let data = await getAllRecord(query)
        res.status(data.code).json(data.message)
    }
}