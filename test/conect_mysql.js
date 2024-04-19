const { result } = require('lodash');
const mysql = require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"test"
});

con.connect((err)=>{
    if(err)
    {
        console.log('could not connect')
    }
    else
    {
        console.log("Successfully Connected")
    }
})

con.query("select * from students",(err,result)=>{
    console.log("result",result);
})

