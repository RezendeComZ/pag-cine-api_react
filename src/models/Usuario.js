module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userName: {
        type: DataType.STRING,
        allowNull: true
      },
      userTelefone: {
        type: DataType.STRING,
        allowNull: true
      },
      userEmail: {
        type: DataType.STRING,
        allowNull: true
      },
      userPassword: {
        type: DataType.STRING,
        allowNull: true
      },
      {
        tableName: 'usuario',
        timestamps: false
        }); 
    }
    return Usuario;
}
