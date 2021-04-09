const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sala', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipoDeSala: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    capacidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'poltronasDisponíveis': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    poltronasOcupadas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cinema_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cinema',
        key: 'id'
      }
    },
    cinema_cidade_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cinema',
        key: 'cidade_id'
      }
    },
    sessao_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sessao',
        key: 'id'
      }
    },
    poltronas_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'poltronas',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'sala',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "cinema_id" },
          { name: "cinema_cidade_id" },
          { name: "sessao_id" },
          { name: "poltronas_id" },
        ]
      },
      {
        name: "fk_sala_cinema1_idx",
        using: "BTREE",
        fields: [
          { name: "cinema_id" },
          { name: "cinema_cidade_id" },
        ]
      },
      {
        name: "fk_sala_sessao1_idx",
        using: "BTREE",
        fields: [
          { name: "sessao_id" },
        ]
      },
      {
        name: "fk_sala_poltronas1_idx",
        using: "BTREE",
        fields: [
          { name: "poltronas_id" },
        ]
      },
    ]
  });
};
