module.exports = (sequelize, DataType) => {
    const Cidade = sequelize.define('Cidade', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataType.STRING,
        allowNull: true
      }
    },
    {
      tableName: 'cidade',
      timestamps: false // por padrao ele espera 'created_at'e 'updated_at', por isso colocar false nesse caso
    })
  
    return Cidade
  }
      
      