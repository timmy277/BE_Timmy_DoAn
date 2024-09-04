const bcryptjs = require('bcryptjs')
const userModel = require('../../models/userModel')
const jwt = require('jsonwebtoken')

async function userLogInController(req, res) {
    try {

        const { email, password } = req.body

        if (!email) {
            throw new Error("Please provide email")
        }
        if (!password) {
            throw new Error("Please provide password")
        }

        const user = await userModel.findOne({ email })
        if (!user) {
            throw new Error("User not found")
        }

        const checkPassword = await bcryptjs.compare(password, user.password)
        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email,
            }
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 })

            const tokenOptions = {
                httpOnly: true,
                secure: true,
                sameSite: 'none'
            }

            res.cookie('token', token, tokenOptions).json({
                message: 'User logged in successfully',
                data: token,
                success: true,
                error: false
            })
        }
        else {
            throw new Error('Incorrect password', user.password, password)
            console.log(user.password, password)
        }
    }
    catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = userLogInController 