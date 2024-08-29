const jwt = require('jsonwebtoken')

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token || req.header

        if (!token){
            return res.status(200).json({
                message: "User not logged in",
                error : true,
                success : false
            })
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
            console.log(err, "err")
            console.log(decoded, "decoded")
            if(err){
                console.log("err auth", err)
            }
            req.userId = decoded?._id
            next()
            console.log(token, "token")
        });

    }catch(error){
        res.status(400).json({
            message: error.message || error,
            data: [],
            error: true,
            success: false
        })
    }
}

module.exports = authToken