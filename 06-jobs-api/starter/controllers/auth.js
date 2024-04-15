const User = require('../models/User');
const { StatusCode } = require('http-status-codes');
const {BadRequestError, UnauthenticatedError} = require('../errors')


const register = async (req,res) =>{
    console.log('here...');
const user = await User.create({...req.body})
const token = user.createJWT()

    req.status(StatusCode.CREATED).json({user:{ name:user.name },token})

}

const login = async (req,res) =>{
console.log('here...');
    const {email,password } =req.body

    if(!email || !password){

        throw new BadRequestError('Please provide email or password')
    }


const user  = await User.findOne({email})
if(!user){
    throw new UnauthenticatedError('Invalid Credentials')
}

const isPasswordCorrect = await user.comparePassword(password)
if(!isPasswordCorrect){
    throw new UnauthenticatedError('Invalid Credentials')
}

//compare password
const token = user.createJWT();
res.status(StatusCodes.OK).json({user:{name:user.name},token })

}

module.exports = {
register,
login,
}