const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('compra', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    preco: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    formaPagamento: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ingresso_filme_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ingresso',
        key: 'filme_id'
      }
    },
    ingresso_filme_idioma_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ingresso',
        key: 'filme_idioma_id'
      }
    },
    ingresso_tipoingresso_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ingresso',
        key: 'tipoingresso_id'
      }
    },
    ingresso_usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ingresso',
        key: 'usuario_id'
      }
    },
    ingresso_sala_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ingresso',
        key: 'sala_id'
      }
    },
    ingresso_sala_cinema_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ingresso',
        key: 'sala_cinema_id'
      }
    },
    ingresso_sala_cinema_cidade_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ingresso',
        key: 'sala_cinema_cidade_id'
      }
    },
    ingresso_sala_sessao_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ingresso',
        key: 'sala_sessao_id'
      }
    },
    ingresso_sala_poltronas_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ingresso',
        key: 'sala_poltronas_id'
      }
    },
    QRCode_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'QRCode',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'compra',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "ingresso_filme_id" },
          { name: "ingresso_filme_idioma_id" },
          { name: "ingresso_tipoingresso_id" },
          { name: "ingresso_usuario_id" },
          { name: "ingresso_sala_id" },
          { name: "ingresso_sala_cinema_id" },
          { name: "ingresso_sala_cinema_cidade_id" },
          { name: "ingresso_sala_sessao_id" },
          { name: "ingresso_sala_poltronas_id" },
          { name: "QRCode_id" },
        ]
      },
      {
        name: "fk_compra_ingresso1_idx",
        using: "BTREE",
        fields: [
          { name: "ingresso_filme_id" },
          { name: "ingresso_filme_idioma_id" },
          { name: "ingresso_tipoingresso_id" },
          { name: "ingresso_usuario_id" },
          { name: "ingresso_sala_id" },
          { name: "ingresso_sala_cinema_id" },
          { name: "ingresso_sala_cinema_cidade_id" },
          { name: "ingresso_sala_sessao_id" },
          { name: "ingresso_sala_poltronas_id" },
        ]
      },
      {
        name: "fk_compra_QRCode1_idx",
        using: "BTREE",
        fields: [
          { name: "QRCode_id" },
        ]
      },
    ]
  });
};
