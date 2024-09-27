const userModel = require('../../models/userModel')
const bcryptjs = require('bcryptjs')

async function userSignUpController(req, res) {
    try {

        const { name, email, password } = req.body

        const user = await userModel.findOne({ email })

        if (user) {
            return res.status(200).json({
                message: 'User already exists',
                error: true,
                success: false,
            });
        }


        const salt = bcryptjs.genSaltSync(10);
        const hashPassword = await bcryptjs.hashSync(password, salt);

        if (!hashPassword) {
            throw new Error('Failed to hash password')
        }

        const payload = {
            ...req.body,
            role: "USER",
            password: hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: 'User created successfully',
            statusCode: 201,
        })

    }
    catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = userSignUpController;