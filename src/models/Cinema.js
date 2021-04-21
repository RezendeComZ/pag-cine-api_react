module.exports = (sequelize, DataType) => {
    const Cinema = sequelize.define('Cinema', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      bairro: {
        type: DataType.STRING,
      },
        CEP: {
          type: DataType.INTEGER,
      },
        lougradoro: {
          type: DataType.STRING,
        },
        cidade_id: {
          type: DataType.INTEGER,
        }
      },
      {
        tableName: 'cinema',
        timestamps: false // por padrao ele espera 'created_at'e 'updated_at', por isso colocar false nesse caso
      })    
  
      // Filme.belongsTo(listaDeModelos.Cidade, {
      //   foreignKey: 'cidade_id',
      //   as: 'cidade'
      //   })
      // }
    return Cinema
} 