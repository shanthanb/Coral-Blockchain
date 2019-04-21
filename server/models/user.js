'use strict';

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('userData', {
        userName: {
            type: DataTypes.STRING(25),
        },
        emailId: {
            type: DataTypes.STRING(50),
            primaryKey: true,
            validate: { isEmail: true }
        },
        phoneNo: {
            type: DataTypes.STRING(10)
        },
        password: {
            type: DataTypes.STRING(50)
        },
        dateTime: {
            type: DataTypes.DATE
        }
    }, {
        timestamps: false,
    });
    User.associate = function (models) {
    };
    return User;
};
