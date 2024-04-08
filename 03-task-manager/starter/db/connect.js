const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017';
const database = 'store';
const client = new MongoClient(url)

async function connectDB()
{
    let result = await client.connect();
    let db = result.db(database)
    let collection = db.collection('products')
    let response = await collection.find({}).toArray();


}


module.exports = {connectDB}
