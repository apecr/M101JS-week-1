const mongodb = require('mongodb');
const assert = require('assert');
const MongoClient = mongodb.MongoClient;


const getFilms = async() => {
  const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
  const docs = await client.db('video').collection('movies').find({}).toArray();
  client.close();
  return docs;
};

getFilms()
  .then(docs => docs.forEach(element => console.log(JSON.stringify(element, undefined, 4))))
  .catch(console.log);