const userModel = require('../models/userModel')
const bcryptjs = require('bcryptjs')

async function userSignUpController(req, res) {
    try{

        const {name, email, password} = req.body

        const user = await userModel.findOne({ email})

        if(user){
            throw new Error('User already exists')
        }
        if(!name){
            throw new Error('Name is required')
        
        }
        else if(!email){
            throw new Error('Email is required')
        }
        else if(!password){
            throw new Error('Password is required')
        } 

    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = await bcryptjs.hashSync(password, salt);
    console.log(hashPassword)

    if(!hashPassword){
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
    catch(err){
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = userSignUpController;