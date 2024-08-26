const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken');



module.exports.signUp = async (req, res) => {
    const url = req.body.url || 'https://i.pimg.jp/062/742/267/1/62742267.jpg'
    const name = req.body.name
    const type = req.body.type || 'USER'
    const email = req.body.email
    const password = req.body.password

    if(!name){
        return res.send({code: 400, message: 'Name is required'})
    }
    else if(!email){
        return res.send({code: 400, message: 'Email is required'})
    }
    else if(!password){
        return res.send({code: 400, message: 'Password is required'})
    } 
    else{
        const newUser = await new userModel({url, name, type, email, password})
        const isSaved = await newUser.save()
        if (isSaved) {
            res.send({ code: 200, message: 'Saved'})
        }
        else {
            res.send({ code: 500, message: 'Server error'})
        }
    }
}

module.exports.logIn = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    if(!email){
        return res.send({code: 400, message: 'Email is required'})
    }
    else if(!password){
        return res.send({code: 400, message: 'Password is required'})
    }
    else{
        const isEmailExisted = await userModel.findOne({email: email})
        if(isEmailExisted){
            console.log('Email already exists', isEmailExisted)
            if(isEmailExisted.password === req.body.password){
                const token = jwt.sign({
                    expAfter : Math.floor(Date.now() / 1000) + (60 * 60),
                    email: isEmailExisted.email,
                    password: isEmailExisted.password, 
                    type: isEmailExisted.type
                }, 'MY_SECRET_KEY')
                return res.send({code: 200, message: 'Login success', token: token, userId: isEmailExisted._id})
            }
            else{
                res.send({code: 401, message: 'Incorrect password'})
            }
        }
        else{
            res.send({code: 404, message: 'Email not found'})
        }
    }
}

module.exports.addToCart = async (req, res) => {
    console.log(req.body)
    const isUpdate = await userModel.updateOne({_id: req.body.userId}, {
        $addToSet : { cart: req.body.productId}
    })

    if(isUpdate) {
        return res.send({code: 200, message: 'Add to cart success'})
    }
    else {
        return res.send({code: 500, message: 'Server error'})
    }
}

module.exports.getCart = async (req, res) => {
    const userId = req.body.userId
    const data = await userModel.findOne({_id: userId}).populate('cart')
    if(data){
        return res.send({code: 200, message: 'Get cart success', data: data})
    }
    else {
        return res.send({code: 500, message: 'Server error'})
    }
}