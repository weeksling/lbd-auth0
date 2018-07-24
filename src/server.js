const express = require('express');
const bodyParser = require('body-parser');

const log = require('./logging')();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(log.requestLogger());

app.use(log.errorLogger());
app.use((err, req, res, next) => {
  const status = err.status || 400;
  res.status(status).send(err);
});

module.exports = app;
