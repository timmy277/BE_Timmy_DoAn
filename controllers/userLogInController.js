const bcryptjs = require('bcryptjs')
const userModel = require('../models/userModel')


async function userLogInController(req, res) {
    try{

        const { email , password} = req.body

        if(!email){
            throw new Error("Please provide email")
        }
        if(!password){
            throw new Error("Please provide password")
        }

        const user = await userModel.findOne({email})
        console.log(user)
        if(!user){
            throw new Error("User not found")
        }
        
        const checkPassword = await bcryptjs.compare(password, user.password)
        console.log(password)
        console.log(user.password)
        console.log("checkPassword",checkPassword)
        if(checkPassword){
            res.send({success:true})
        }
        else{
            throw new Error('Incorrect password', user.password, password)
            console.log(user.password, password)
        }
    }
    catch(err){
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = userLogInController 