const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors');
const {attachCookiesToResponse} = require('../utils');

const register = async (req, res) => {
    /* res.send('Register User') */

    const { email } = req.body
    const emailAlreadyExists = await User.findOne({ email })
    if (emailAlreadyExists) {
        throw new CustomError.BadRequestError('Email Already exists')
    }

    // first register user is an admin
    const isFirstAccount = (await User.countDocuments({})) === 0;
    const role = isFirstAccount ? 'admin' : 'user';

    const user = await User.create(req.body)
    const tokenUser = { name: user.name, userId: user._id, role: user.role }

    attachCookiesToResponse({res,user:tokenUser})
    res.status(StatusCodes.CREATED).json({ user: tokenUser })
    /* const token = jwt.sign(tokenUser,'jwtSecret',{expiresIn:'1d'}) */
    /* const token = createJWT({payload:tokenUser}) */


};
const login = async (req, res) => {
    const {email,password} = req.body

if(!email || !password){
    throw new CustomError.BadRequestError('Please provide email and password')
}

const user = await User.findOne({email})

if(!user){
    throw new CustomError.BadRequestError('Invalid credentials')
}

const isPasswordCorrect = await user.comparePassword(password)
if(!isPasswordCorrect){
    throw new CustomError.BadRequestError('Invalid credentials')
}

const tokenUser = { name: user.name, userId: user._id, role: user.role }

attachCookiesToResponse({res,user:tokenUser})
res.status(StatusCodes.CREATED).json({ user: tokenUser })
    // res.send('Login User')

};
const logout = async (req, res) => {
    res.cookie('token','logout',{
        httpOnly:true,
        expires: new Date(Date.now())
    })
    res.status(StatusCodes.OK).json({msg:'user log out!'})
};

module.exports = {
    register, login, logout
}