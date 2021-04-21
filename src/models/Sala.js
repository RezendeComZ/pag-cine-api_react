module.exports = (sequelize, DataType) => {
    const Sala = sequelize.define('Sala', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tipoDeSala:{
        type: DataType.STRING,
        allowNull: true
      },
      capacidade:
      {
        type: DataType.INTEGER,
        allowNull: true
      },
      poltronasDisponiveis:{
        type: DataType.INTEGER,
        allowNull: true
      },
      poltronasOcupadas:
      {
        type: DataType.INTEGER,
        allowNull: true
      },
        cinema_id:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        cinema_cidade_id:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        sessao_id:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        poltronas_id:
        {
            type: DataType.INTEGER,
            allowNull: true
        }
    },
    {
      tableName: 'sala',
      timestamps: false // por padrao ele espera 'created_at'e 'updated_at', por isso colocar false nesse caso
    })
    return Sala
  }