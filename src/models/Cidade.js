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
      }},{
        tableName: 'cidade',
        timestamps: false
        }); 
    
    return Cidade;
}