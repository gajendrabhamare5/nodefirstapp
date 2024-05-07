const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors');
const jwt = require('jsonwebtoken')

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
    const token = jwt.sign(tokenUser,'jwtSecret',{expiresIn:'1d'})

    res.status(StatusCodes.CREATED).json({ user:tokenUser,token })
};
const login = async (req, res) => {
    res.send('Login User')
};
const logout = async (req, res) => {
    res.send('Logout User')
};

module.exports = {
    register, login, logout
}