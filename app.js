const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const routersInit = require('./server/api');
const databaseService = require('./server/db/dataBaseServices');
const app = express()
const port = process.env.PORT || 3000

databaseService.prepareDataBase();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(compression()); // apply gzip compression
app.use(cors()); // apply gzip compression
/**
 * Include API
 */
app.use('/api/v1', routersInit());

app.use(express.static(path.join(__dirname, './client/public')))
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/public', 'index.html'))
})

const server = app.listen(port, () => console.log(`Listening on port  ${port}`))

