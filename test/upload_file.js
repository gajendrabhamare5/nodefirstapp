const express = require('express')
const multer = require('multer')
const app = express();


const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.filename+"_"+Date.now()+".jpg")
        }
    })
}).single("user_file")

app.post("/upload",upload,(req,resp)=>{
    resp.send("file upload")
})


app.listen(2028)
