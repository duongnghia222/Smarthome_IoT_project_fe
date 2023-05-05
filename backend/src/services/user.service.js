const User = require('../models/user.model')
const Userlogin = require('../models/userlogin.model')

module.exports = {
    createUser: async (userInfo) => {
        let user = new User(userInfo);
        await user.save();
        return {
            code: 200,
            message: userInfo
        }
    },

    createUserLogin: async (userInfo) => {
        let user = new Userlogin(userInfo);

        try {
            const data = await Userlogin.find({ username: userInfo.username }).exec();
            if (data.length === 0) {
                if (userInfo.password.length !== 0) {
                    await user.save();
                    return {
                        code: 200,
                        message: "Register successful"
                    }
                }

                else {
                    return {
                        code: 200,
                        message: 'Wrong type password'
                    }
                }
                
            } else {
                return {
                    code: 200,
                    message: `Username ${userInfo.username} is already taken`
                }
            }
        } catch (err) {
            return {
                code: 500,
                message: 'Server errors'
            }
        }


    },

    loginUser: async (userInfo) => {
        try {
            const data = await User.find({ email: userInfo.email }).exec();
            // const data = userInfo
            // console.log(data)
            if (data.length === 0) {
                return {
                    code: 404,
                    message: 'Login failed'
                }
            } else {
                if (data[0].password === userInfo.password)
                    return {
                        code: 200,
                        message: {email: userInfo.email, password: userInfo.password}
                    }
                else {
                    return {
                        code: 404,
                        message: 'Login failed'
                    }
                }
            }
        } catch (err) {
            return {
                code: 500,
                message: 'Server error'
            }
        }
    }
}