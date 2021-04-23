module.exports = (sequelize, DataType) => {
    const Ingresso = sequelize.define('Ingresso', {
      fime_id: 
      {
        type: DataType.INTEGER,
        allowNull: true
      },
      fime_idioma_id: 
      {
        type: DataType.INTEGER,
        allowNull: true
      },
      tipoIngresso_id: 
      {
        type: DataType.INTEGER,
        allowNull: true
      },
      usuario_id:
      {
        type: DataType.INTEGER,
        allowNull: true
      },
      sala_id:
      {
        type: DataType.INTEGER,
        allowNull: true
      },
      sala_cinema_id:
      {
        type: DataType.INTEGER,
        allowNull: true
      },
      sala_cinema_cidade_id:
      {
        type: DataType.INTEGER,
        allowNull: true
      },
      sala_sessao_id:
      {
        type: DataType.INTEGER,
        allowNull: true
      },
      sala_poltronas_id:{
        type: DataType.INTEGER,
        allowNull: true
      }
  },
  {
    tableName: 'ingresso',
    timestamps: false // por padrao ele espera 'created_at'e 'updated_at', por isso colocar false nesse caso
  })
  
  return Ingresso
}