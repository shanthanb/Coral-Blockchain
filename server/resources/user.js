'use strict';
const Ajv = require('ajv');
const ajv = new Ajv;
const responses = require('responses');

module.exports = {
    insertRecord: function (req, res, next) {
        var schema = {
            "properties": {
                "userName": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 25
                },
                "emailId": {
                    "type": "string",
                    "format": "email"
                },
                "phoneNo": {
                    "type": "string",
                    "pattern": "^[0-9]{10}$"
                },
                "password": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 50
                }
            }
        };
        var valid = ajv.validate(schema, req.body);
        if (!valid) {
            var tempMsg = {}
            for (var i=0;i<ajv.errors.length;i++) {
                tempMsg[ajv.errors[i].dataPath] = ajv.errors[i].message
            }
            req.resp = {
                statusCode: 400,
                msg: tempMsg
            }
            responses.genericResponse(req, res, next)
        }
        else {
            next();
        }
    },
    searchRecord: function (req, res, next) {
        var schema = {
            "properties": {
                "emailId": {
                    "type": "string",
                    "format": "email"
                },
            }
        };
        var valid = ajv.validate(schema, req.body);
        if (!valid) {
            var tempMsg = {}
            for (var i=0;i<ajv.errors.length;i++) {
                tempMsg[ajv.errors[i].dataPath] = ajv.errors[i].message
            }
            req.resp = {
                statusCode: 400,
                msg: tempMsg
            }
            responses.genericResponse(req, res, next)
        }
        else {
            next();
        }
    },
    deleteRecord: function (req, res, next) {
        var schema = {
            "properties": {
                "emailId": {
                    "type": "string",
                    "format": "email"
                },
            },
        };
        var valid = ajv.validate(schema, req.body);
        if (!valid) {
            var tempMsg = {}
            for (var i=0;i<ajv.errors.length;i++) {
                tempMsg[ajv.errors[i].dataPath] = ajv.errors[i].message
            }
            req.resp = {
                statusCode: 400,
                msg: tempMsg
            }
            responses.genericResponse(req, res, next)
        }
        else {
            next();
        }
    },
}