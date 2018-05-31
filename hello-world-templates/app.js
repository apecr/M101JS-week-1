const express = require('express');
const engines = require('consolidate');
const app = express();
const path = require('path');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('hello', {name: 'Templates'});
});

app.use((req, res) => {
  res.sendStatus(404);
});

const server = app.listen(3000, () => {
  console.log(server.address().port);
});