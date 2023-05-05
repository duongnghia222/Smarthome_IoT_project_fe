const route = require('express').Router()
const {createUser} = require('../controllers/user.controller')

route.post('/user',createUser)

module.exports = route