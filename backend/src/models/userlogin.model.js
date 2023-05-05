const mongoose = require('mongoose')

const UserLoginSchema = new mongoose.Schema({
    email: String,
    password: String,
},{
    timestamps: true,
    collection: "userslogin"
})

module.exports = mongoose.model('UserLogin', UserLoginSchema);