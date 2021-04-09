const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cinema', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bairro: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    cep: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    logradouro: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cidade_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cidade',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'cinema',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "cidade_id" },
        ]
      },
      {
        name: "fk_cinema_cidade_idx",
        using: "BTREE",
        fields: [
          { name: "cidade_id" },
        ]
      },
    ]
  });
};
