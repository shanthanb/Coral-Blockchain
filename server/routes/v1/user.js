const express = require('express');
const app = express();

const router = express.Router();
const userResources = require('resources').user;
const userControllers = require('controllers').user;
const responses = require('responses');


router.route('/insertRecord')
    .post(userResources.insertRecord, userControllers.insertRecord, responses.genericResponse);

router.route('/searchRecord')
    .post(userResources.searchRecord, userControllers.searchRecord, responses.genericResponse);

router.route('/deleteRecord')
    .post(userResources.deleteRecord, userControllers.deleteRecord, responses.genericResponse);

app.use('/', router);

module.exports = app;