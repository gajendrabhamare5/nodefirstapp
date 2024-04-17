const express = require('express')
const dbConnect = require('./mongodb');

const app = express()

app.get('/', async (req,resp)=>{
    let data = await dbConnect();
data = await data.find().toString();
console.log(data);
resp.send(data)
})

app.listen(8000)