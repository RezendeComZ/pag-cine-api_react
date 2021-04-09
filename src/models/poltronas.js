const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('poltronas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fileira: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    numeracaoPoltrona: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tipoPoltrona_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipoPoltrona_id1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tipoPoltrona',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'poltronas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "tipoPoltrona_id" },
          { name: "tipoPoltrona_id1" },
        ]
      },
      {
        name: "fk_poltronas_tipoPoltrona1_idx",
        using: "BTREE",
        fields: [
          { name: "tipoPoltrona_id" },
        ]
      },
      {
        name: "fk_poltronas_tipoPoltrona2_idx",
        using: "BTREE",
        fields: [
          { name: "tipoPoltrona_id1" },
        ]
      },
    ]
  });
};
