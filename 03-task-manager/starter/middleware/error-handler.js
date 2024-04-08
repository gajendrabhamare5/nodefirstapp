const {CustomeApiError} = require('../errors/custom-error')
const errorHandlerMiddleware = (err,req,res,next) => {

if(err instanceof CustomeApiError){
    return res.status(err.statusCode).json({msg:err.message})
}

    return req.status(500).json({msg:`Something went wrong, Try again later...`});
    }

    module.exports = errorHandlerMiddleware