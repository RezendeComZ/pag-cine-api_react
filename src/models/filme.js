const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('filme', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tituloOriginal: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    lancamento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    paisOrigem: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    duracao: {
      type: DataTypes.TIME,
      allowNull: false
    },
    sinopse: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exibicaoInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    exibicaoFinal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    idioma_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'idioma',
        key: 'id'
      }
    },
    genero_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'genero',
        key: 'id'
      }
    },
    poster_url: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    trailer_url: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    classificacao: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'filme',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "idioma_id" },
          { name: "genero_id" },
        ]
      },
      {
        name: "fk_filme_idioma1_idx",
        using: "BTREE",
        fields: [
          { name: "idioma_id" },
        ]
      },
      {
        name: "fk_filme_genero1_idx",
        using: "BTREE",
        fields: [
          { name: "genero_id" },
        ]
      },
    ]
  });
};
