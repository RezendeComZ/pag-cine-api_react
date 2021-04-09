'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('filmes', {
      id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      tituloOriginal: {
        type: Sequelize.STRING,
      },
      lancamento: Sequelize.DATEONLY,
      paisOrigem: Sequelize.STRING,
      duracao: Sequelize.TIME,
      sinopse: Sequelize.TEXT,
      rate: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      exibicaoInicio: Sequelize.DATEONLY,
      exibicaoFinal: Sequelize.DATEONLY,
      idioma_id: {
        type: Sequelize.INTEGER,      
      },
      genero_id: Sequelize.INTEGER,
      poster_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      trailer_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      classificacao: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
