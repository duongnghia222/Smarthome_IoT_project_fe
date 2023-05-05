const route = require('express').Router()
const {addAnActivity,getAllActivity} = require('../controllers/activity.controller')

route.post('/activity',addAnActivity)
route.get('/activity',getAllActivity)

module.exports = route