const jwt = require('jsonwebtoken')
const {unauthenticatdError} = require('../errors/custom-error')

const authorizationMiddleware = async (req,res,next) =>{

    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new unauthenticatdError('No token Provided')
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        const {id,username} = decoded
        req.user = {id,username}


    } catch (error) {
        throw new unauthenticatdError('Not authorized to access this route')
    }


    next()
}
