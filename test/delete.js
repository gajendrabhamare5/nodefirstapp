const dbConnect = require('mongodb')

const deleteData = async ()=>{
    let data = await dbConnect();
    /* let result = await data.deleteOne({ */
    let result = await data.deleteMany({
        name:'John Doe'
    })
    console.log(result);
    if(result.acknowledged){
console.log("Record is deleted");
    }
}

deleteData()