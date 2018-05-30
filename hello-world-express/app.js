const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use((req, res) => {
  res.sendStatus(404);
});

const server = app.listen(3000, () => {
  console.log(server.address().port);
});