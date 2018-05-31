const express = require('express');
const engines = require('consolidate');
const app = express();
const path = require('path');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

const mongodb = require('mongodb');
const assert = require('assert');
const MongoClient = mongodb.MongoClient;


const getFilms = async() => {
  const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
  const docs = await client.db('video').collection('movies').find({}).toArray();
  client.close();
  return docs;
};

app.get('/', async(req, res) => {
  const docs = await getFilms();
  res.render('movies', { movies: docs });
});

app.use((req, res) => {
  res.sendStatus(404);
});

const server = app.listen(3000, () => {
  console.log(server.address().port);
});