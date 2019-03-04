const express = require('express');
const employee = require('./employee');

const routersInit = () => {
  const app = express();

  app.use('/employees', employee());
  return app;
};

module.exports = routersInit;
