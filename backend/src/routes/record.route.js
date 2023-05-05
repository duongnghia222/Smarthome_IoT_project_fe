const route = require('express').Router()
const {addARecord,getAllRecord} = require('../controllers/record.controller')

route.post('/record',addARecord)
route.get('/record',getAllRecord)

module.exports = route