const {mongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const databaseName = 'test'
const client = new mongoClient(url)

async function dbConnect(){
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection('users')

}

module.exports = dbConnect