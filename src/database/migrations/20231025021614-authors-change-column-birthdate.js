'use strict';
const db = require('./../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await db.sequelize.query("ALTER TABLE authors ALTER COLUMN birthdate TYPE date USING to_date(birthdate, 'YYYY-MM-DD')")
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('authors', 'birthdate', {
      type: Sequelize.STRING,
      allowNull: false,
    })
  }
};
