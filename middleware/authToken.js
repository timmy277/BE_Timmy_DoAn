const jwt = require('jsonwebtoken')

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token || req.headers['authorization']?.split(' ')[1];
        // const token = req.cookies?.token  || req.header

        if (!token){
            return res.status(200).json({
                message: "User not logged in",
                error : true,
                success : false
            })
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
            if (err) {
                return res.status(401).json({
                    message: "Invalid token",
                    error: true,
                    success: false
                });
            }
            req.userId = decoded?._id
            next()
            // console.log(token, "token")
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