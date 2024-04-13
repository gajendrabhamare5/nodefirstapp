
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
/* console.log('i am in model page...'); */

const UserSchema = new mongoose.Schema({

name:{
    type:String,
    required:[true,'please provide name'],
    minlength:3,
    maxlength:50,
},

email:{
    type:String,
    required:[true,'please provide email'],
    match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Please provide valid email',
      ],
      unique:true,
},

password:{
    type:String,
    required:[true,'please provide password'],
    minlength:6,
},

})


UserSchema.pre('save',async function(){
const salt = await bcrypt.genSalt(10);
this.password = await bryct.hash(this.password.salt)

})

UserSchema.methods.createJWT = function() {
    return jwt.sign({userId:this._id,name:this.name},process.env.JWT_SECRET,{expiresIn:ProcessingInstruction.env.JWT_SECRET})
}


UserSchema.methods.comparePassword = async function (canditatePassword){
    const isMatch = await bcrypt.compare(canditatePassword,this.password)
    return isMatch
}


module.exports = mongoose.model('User', UserSchema)