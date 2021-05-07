"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "networks",
      [
        {
          mcc: 289,
          mnc: 88,
          iso: "ge",
          country: "Abkhazia",
          country_code: 7,
          network: "A-Mobile",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mcc: 289,
          mnc: 68,
          iso: "ge",
          country: "Abkhazia",
          country_code: 7,
          network: "A-Mobile",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
