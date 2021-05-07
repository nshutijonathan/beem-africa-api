'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('networks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mcc: {
        type: Sequelize.INTEGER
      },
      mnc: {
        type: Sequelize.INTEGER
      },
      iso: {
        type: Sequelize.TEXT
      },
      country: {
        type: Sequelize.TEXT
      },
      country_code: {
        type: Sequelize.INTEGER
      },
      network: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('networks');
  }
};