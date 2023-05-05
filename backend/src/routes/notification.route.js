const route = require('express').Router()
const {addANotification,getAllNotification} = require('../controllers/notification.controller')

route.post('/notification',addANotification)
route.get('/notification',getAllNotification)

module.exports = route