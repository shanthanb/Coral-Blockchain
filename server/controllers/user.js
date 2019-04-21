'use strict';

const models = require('models'),
    User = models.userData;
const bcrypt = require('bcrypt');

module.exports = {
    insertRecord: function (req, res, next) {
        User.findOne({ where: { emailId: req.body.emailId } }).then(function (user) {
            const newUser = {
                userName: req.body.userName,
                emailId: req.body.emailId,
                phoneNo: req.body.phoneNo,
                password: bcrypt.hashSync(req.body.password, 10),
                dateTime: new Date()
            }
            if (!user) {
                User.create(newUser).then(function (newUser) {
                    if (newUser) {
                        req.resp = {
                            statusCode: 200,
                            msg: "New record inserted"
                        }
                    }
                    else {
                        req.resp = {
                            msg: "Sorry, It's not about you. Its from us"
                        }
                    }
                    next();
                })
            } else {
                user.update(newUser).then(function (updatedUser) {
                    if (updatedUser) {
                        req.resp = {
                            statusCode: 200,
                            msg: "Record updated successfully"
                        }
                        next();
                    }
                })
            }
        })
    },
    searchRecord: function (req, res, next) {
        User.findOne({ where: { emailId: req.body.emailId } }).then(function (user) {
            if (!user) {
                req.resp = {
                    statusCode: 400,
                    msg: "Record doesn't exist"
                }
            }
            else {
                req.resp = {
                    statusCode: 200,
                    data: user
                }
            }
            next();
        })
    },
    deleteRecord: function (req, res, next) {
        User.destroy({ where: { emailId: req.body.emailId } }).then(function (result) {
            if (result) {
                req.resp = {
                    statusCode: 200,
                    msg: "Deleted successfully"
                }
            } else {
                req.resp = {
                    statusCode: 400,
                    msg: "Record doesn't exist"
                }
            }
            next();
        })
    }
}