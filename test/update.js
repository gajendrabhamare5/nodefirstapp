const dbConnect = require('mongodb')


const updateData= async ()=>{
let data = await  dbConnect();

let result = await data.updateOne(
    {name:'gajendra bhamare'},
    {
        $set:{name:'gajendra p bhamare',email:'gaju1254@gmail.com'}
    }
)

console.warn(result);
}

updateData()