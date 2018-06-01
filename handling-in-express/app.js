const express = require('express');
const consolidate = require('consolidate');
const path = require('path');

const app = express();

app.engine('html', consolidate.swig);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(express.bodyParser());

const errorHandler = (error, req, res, next) => {
  console.error(error.message);
  console.error(error.stack);
  res.status(500);
  res.render('error_template', {error});
};

app.use(errorHandler);

app.get('/:name', (req, res, next) => {
  const name = req.params.name;
  const getVar1 = req.query.getvar1 || 'not set yet';
  const getVar2 = req.query.getvar2 || 'not set yet';
  res.render('hello', {
    name,
    getVar1,
    getVar2
  });
});

app.listen(3000);
console.log('Express server listening on port 3000');