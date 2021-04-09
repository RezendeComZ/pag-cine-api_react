const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingresso', {
    filme_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'filme',
        key: 'id'
      }
    },
    filme_idioma_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'filme',
        key: 'idioma_id'
      }
    },
    tipoingresso_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tipoingresso',
        key: 'id'
      }
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    sala_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sala',
        key: 'id'
      }
    },
    sala_cinema_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sala',
        key: 'cinema_id'
      }
    },
    sala_cinema_cidade_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sala',
        key: 'cinema_cidade_id'
      }
    },
    sala_sessao_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sala',
        key: 'sessao_id'
      }
    },
    sala_poltronas_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sala',
        key: 'poltronas_id'
      }
    }
  }, {
    sequelize,
    tableName: 'ingresso',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "filme_id" },
          { name: "filme_idioma_id" },
          { name: "tipoingresso_id" },
          { name: "usuario_id" },
          { name: "sala_id" },
          { name: "sala_cinema_id" },
          { name: "sala_cinema_cidade_id" },
          { name: "sala_sessao_id" },
          { name: "sala_poltronas_id" },
        ]
      },
      {
        name: "fk_sala_has_filme_filme1_idx",
        using: "BTREE",
        fields: [
          { name: "filme_id" },
          { name: "filme_idioma_id" },
        ]
      },
      {
        name: "fk_ingresso_tipoingresso1_idx",
        using: "BTREE",
        fields: [
          { name: "tipoingresso_id" },
        ]
      },
      {
        name: "fk_ingresso_usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "usuario_id" },
        ]
      },
      {
        name: "fk_ingresso_sala1_idx",
        using: "BTREE",
        fields: [
          { name: "sala_id" },
          { name: "sala_cinema_id" },
          { name: "sala_cinema_cidade_id" },
          { name: "sala_sessao_id" },
          { name: "sala_poltronas_id" },
        ]
      },
    ]
  });
};
