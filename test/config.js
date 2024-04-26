
//Connect Mongodb
/* const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/test") */

//Connect Mysql
const mysql = require('mysql')

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
})

con.connect((err)=>{
    if(err){
        console.log("Could not connect");
    }else{
        console.log("Connected Successfully");
    }
})

module.exports = con;