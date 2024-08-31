const userModel = require("../models/userModel")

async function updateUserController(req, res) {
    try {
        const sessionUser = req.userId
        const {userId, name, email, role } = req.body
        const payload = {
            ...(email && { email: email}),
            ...(name && { name: name }),
            ...(role && { role: role }),
        }
        const user = await userModel.findById(sessionUser) 

        const updateUser = await userModel.findByIdAndUpdate(userId, payload)

        res.status(200).json({
            data: updateUser,
            error: false,
            success: true,
            message: "User updated successfully"
        })
    }
    catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = updateUserController