const express = require('express')
require("./config")
const Product = require('./products')
const app = express();

app.use(express.json());

app.get('/search/:key',async (req,resp)=>{
    console.log(req.params.key);
    const data = await Product.find(
        {
            "$or":[
                { "name":{$regex:req.params.key}}
            ]
        }
    )

resp.send(data)
})


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});