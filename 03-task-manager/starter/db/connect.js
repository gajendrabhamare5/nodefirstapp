/* const { connect } = require("mongoose");

const mongoose = require("mongoose")



const connectDB = (url)=>{
    console.log(url);
return mongoose.connect( url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  })

  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error.message);
  });

}

module.exports = connectDB
 */

const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017';
const database = 'store';
const client = new MongoClient(url)

async function connectDB()
{
    let result = await client.connect();
    let db = result.db(database)
    let collection = db.collection('products')
     /* console.log(collection); */
    let response = await collection.find({}).toArray();
/* console.log(response);  */

}

/* connectDB() */
module.exports = connectDB
