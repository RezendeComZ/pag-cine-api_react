module.exports = (sequelize, DataType) => {
    const TipoPoltronas = sequelize.define('TipoPoltronas', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tipo:
      {
        type: DataType.STRING,
      },{
        tableName: 'tipoPoltronas',
        timestamps: false
        }) 
    }
    return TipoPoltronas;
}