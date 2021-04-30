'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('idioma', [
       {
        nomeIdoma: 'Português',
      },
       {
        nomeIdoma: 'Inglês',
      },
       {
        nomeIdoma: 'Espanhol',
      },
       {
        nomeIdoma: 'Francês',
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
