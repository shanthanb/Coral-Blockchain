const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const http = require('http').Server(app);

const bodyParser = require('body-parser');
const config = require('config');

http.listen(config.app.port, function () {
    console.log("server is listening on port " + config.app.port);
});

// for cors
app.options('*', cors(), function (req, res, next) {
    next();
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//allow react request
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

// for req.resp
app.all('*', function (req, res, next) {
    req.resp = {};
    next();
})

// setup the logger
app.use(morgan('combined', { stream: process.stdout }))

//server static folder
app.use(express.static('public'))

// setup routes
app.use(require('routes'));


module.exports = app;
