const express = require('express');
const consolidate = require('consolidate');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.engine('html', consolidate.swig);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));

const personalErrorHanlder = function(error, req, res, next) {
  if (res.headersSent) {
    return next(error);
  }
  console.error(error.message);
  console.error(error.stack);
  res.status(500);
  res.render('error_template', {error});
};


app.get('/', (req, res, next) => res.render('fruitPicker', {
  fruits: ['apple', 'orange', 'banana', 'peach']
}));

const postFavoriteFruit = (req, res, next) =>
  req.body.fruit ?
    res.send(`Your favourite fruit is ${req.body.fruit}`) :
    next(Error('Select a fruit'));

app.post('/favorite_fruit', postFavoriteFruit);

app.use(personalErrorHanlder);
app.listen(3000);
console.log('Express server listening on port 3000');