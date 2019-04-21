'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userData', {
      userName: {
        type: Sequelize.STRING(25),
      },
      emailId: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        validate: { isEmail: true }
      },
      phoneNo: {
        type: Sequelize.STRING(10)
      },
      password: {
        type: Sequelize.STRING(50)
      },
      dateTime: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userData');
  }
};