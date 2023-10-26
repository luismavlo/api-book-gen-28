'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('authors', 'img', 'photo')
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('authors', 'photo', 'img')
  }
};
