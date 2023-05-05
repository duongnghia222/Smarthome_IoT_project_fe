const {createUser, createUserLogin, loginUser} = require('../services/user.service')

module.exports = {
    createUser: async (req,res) => {
        let userInfo = req.body
        let data = await createUser(userInfo)
        res.status(data.code).json(data.message)
    },

    createUserLogin: async (req,res) => {
        let userInfo = req.body
        let data = await createUserLogin(userInfo)
        res.status(data.code).json(data.message)
    },

    loginUser: async (req,res) => {
        let userInfo = req.body
        // console.log(userInfo)
        let data = await loginUser(userInfo)
        res.status(data.code).json(data.message)
    }
}