const userModel = require("../models/userModel")

async function allUsersController(req, res) {
    try {
        console.log('allUsers', req.userId)
        const allUsers = await userModel.find()
        res.status(200).json({
            data: allUsers,
            error: false,
            success: true,
            message: "All users"
        })
    }
    catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = allUsersController