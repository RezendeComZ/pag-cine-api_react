module.exports = (sequelize, DataType) => {
    const Idioma = sequelize.define('Sala', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tipoDeSala:{
        type: DataType.STRING,
        allowNull: true
      },
      capacidade{
        type: DataType.INTEGER,
        allowNull: true
      },
      poltronasDisponiveis{
        type: DataType.INTEGER,
        allowNull: true
      },
      poltronasOcupadas{
        type: DataType.INTEGER,
        allowNull: true
      },
        cinema_id{
            type: DataType.INTEGER,
            allowNull: true
        },
        cinema_cidade_id{
            type: DataType.INTEGER,
            allowNull: true
        },
        sessao_id{
            type: DataType.INTEGER,
            allowNull: true
        },
        poltronas_id{
            type: DataType.INTEGER,
            allowNull: true
        }
    },
    {
      tableName: 'sala',
      timestamps: false // por padrao ele espera 'created_at'e 'updated_at', por isso colocar false nesse caso
    })
  
    Filme.associate = (listaDeModelos) => {
      Filme.belongsTo(listaDeModelos.Idioma, {
        foreignKey: 'cinema_id',
        as: 'cinema'
      }),
      Filme.belongsTo(listaDeModelos.Genero, {
        foreignKey: 'cinema_cidade_id',
        as: ''
      }),
      Filme.belongsTo(listaDeModelos.Genero, {
        foreignKey: 'sessao_id',
        as: 'sessao'
      }),Filme.belongsTo(listaDeModelos.Genero, {
        foreignKey: 'poltronas_id',
        as: 'poltronas'
      })
    }
    return Sala
  }