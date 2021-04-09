var DataTypes = require("sequelize").DataTypes;
var _QRCode = require("./QRCode");
var _cidade = require("./cidade");
var _cinema = require("./cinema");
var _compra = require("./compra");
var _filme = require("./filme");
var _genero = require("./genero");
var _idioma = require("./idioma");
var _ingresso = require("./ingresso");
var _poltronas = require("./poltronas");
var _sala = require("./sala");
var _sessao = require("./sessao");
var _tipoPoltrona = require("./tipoPoltrona");
var _tipoingresso = require("./tipoingresso");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var QRCode = _QRCode(sequelize, DataTypes);
  var cidade = _cidade(sequelize, DataTypes);
  var cinema = _cinema(sequelize, DataTypes);
  var compra = _compra(sequelize, DataTypes);
  var filme = _filme(sequelize, DataTypes);
  var genero = _genero(sequelize, DataTypes);
  var idioma = _idioma(sequelize, DataTypes);
  var ingresso = _ingresso(sequelize, DataTypes);
  var poltronas = _poltronas(sequelize, DataTypes);
  var sala = _sala(sequelize, DataTypes);
  var sessao = _sessao(sequelize, DataTypes);
  var tipoPoltrona = _tipoPoltrona(sequelize, DataTypes);
  var tipoingresso = _tipoingresso(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  QRCode.belongsToMany(ingresso, { as: 'ingresso_filmes', through: compra, foreignKey: "QRCode_id", otherKey: "ingresso_filme_id" });
  cinema.belongsToMany(cinema, { as: 'cinemas', through: sala, foreignKey: "cinema_cidade_id", otherKey: "cinema_id" });
  cinema.belongsToMany(cinema, { as: 'cinema_cidades', through: sala, foreignKey: "cinema_id", otherKey: "cinema_cidade_id" });
  filme.belongsToMany(filme, { as: 'filme_idiomas', through: ingresso, foreignKey: "filme_id", otherKey: "filme_idioma_id" });
  filme.belongsToMany(filme, { as: 'filmes', through: ingresso, foreignKey: "filme_idioma_id", otherKey: "filme_id" });
  genero.belongsToMany(idioma, { as: 'idiomas', through: filme, foreignKey: "genero_id", otherKey: "idioma_id" });
  idioma.belongsToMany(genero, { as: 'generos', through: filme, foreignKey: "idioma_id", otherKey: "genero_id" });
  ingresso.belongsToMany(ingresso, { as: 'ingresso_filme_idiomas', through: compra, foreignKey: "ingresso_filme_id", otherKey: "ingresso_filme_idioma_id" });
  ingresso.belongsToMany(ingresso, { as: 'ingresso_filmes', through: compra, foreignKey: "ingresso_filme_idioma_id", otherKey: "ingresso_filme_id" });
  ingresso.belongsToMany(ingresso, { as: 'ingresso_filmes', through: compra, foreignKey: "ingresso_sala_cinema_cidade_id", otherKey: "ingresso_filme_id" });
  ingresso.belongsToMany(ingresso, { as: 'ingresso_filmes', through: compra, foreignKey: "ingresso_sala_cinema_id", otherKey: "ingresso_filme_id" });
  ingresso.belongsToMany(ingresso, { as: 'ingresso_filmes', through: compra, foreignKey: "ingresso_sala_id", otherKey: "ingresso_filme_id" });
  ingresso.belongsToMany(ingresso, { as: 'ingresso_filmes', through: compra, foreignKey: "ingresso_sala_poltronas_id", otherKey: "ingresso_filme_id" });
  ingresso.belongsToMany(ingresso, { as: 'ingresso_filmes', through: compra, foreignKey: "ingresso_sala_sessao_id", otherKey: "ingresso_filme_id" });
  ingresso.belongsToMany(ingresso, { as: 'ingresso_filmes', through: compra, foreignKey: "ingresso_tipoingresso_id", otherKey: "ingresso_filme_id" });
  ingresso.belongsToMany(ingresso, { as: 'ingresso_filmes', through: compra, foreignKey: "ingresso_usuario_id", otherKey: "ingresso_filme_id" });
  poltronas.belongsToMany(cinema, { as: 'cinema_cidades', through: sala, foreignKey: "poltronas_id", otherKey: "cinema_cidade_id" });
  sala.belongsToMany(filme, { as: 'filmes', through: ingresso, foreignKey: "sala_cinema_cidade_id", otherKey: "filme_id" });
  sala.belongsToMany(filme, { as: 'filmes', through: ingresso, foreignKey: "sala_cinema_id", otherKey: "filme_id" });
  sala.belongsToMany(filme, { as: 'filmes', through: ingresso, foreignKey: "sala_id", otherKey: "filme_id" });
  sala.belongsToMany(filme, { as: 'filmes', through: ingresso, foreignKey: "sala_poltronas_id", otherKey: "filme_id" });
  sala.belongsToMany(filme, { as: 'filmes', through: ingresso, foreignKey: "sala_sessao_id", otherKey: "filme_id" });
  sessao.belongsToMany(cinema, { as: 'cinema_cidades', through: sala, foreignKey: "sessao_id", otherKey: "cinema_cidade_id" });
  tipoingresso.belongsToMany(filme, { as: 'filmes', through: ingresso, foreignKey: "tipoingresso_id", otherKey: "filme_id" });
  usuario.belongsToMany(filme, { as: 'filmes', through: ingresso, foreignKey: "usuario_id", otherKey: "filme_id" });
  compra.belongsTo(QRCode, { as: "QRCode", foreignKey: "QRCode_id"});
  QRCode.hasMany(compra, { as: "compras", foreignKey: "QRCode_id"});
  cinema.belongsTo(cidade, { as: "cidade", foreignKey: "cidade_id"});
  cidade.hasMany(cinema, { as: "cinemas", foreignKey: "cidade_id"});
  sala.belongsTo(cinema, { as: "cinema_cidade", foreignKey: "cinema_cidade_id"});
  cinema.hasMany(sala, { as: "salas", foreignKey: "cinema_cidade_id"});
  sala.belongsTo(cinema, { as: "cinema", foreignKey: "cinema_id"});
  cinema.hasMany(sala, { as: "cinema_salas", foreignKey: "cinema_id"});
  ingresso.belongsTo(filme, { as: "filme", foreignKey: "filme_id"});
  filme.hasMany(ingresso, { as: "ingressos", foreignKey: "filme_id"});
  ingresso.belongsTo(filme, { as: "filme_idioma", foreignKey: "filme_idioma_id"});
  filme.hasMany(ingresso, { as: "filme_idioma_ingressos", foreignKey: "filme_idioma_id"});
  filme.belongsTo(genero, { as: "genero", foreignKey: "genero_id"});
  genero.hasMany(filme, { as: "filmes", foreignKey: "genero_id"});
  filme.belongsTo(idioma, { as: "idioma", foreignKey: "idioma_id"});
  idioma.hasMany(filme, { as: "filmes", foreignKey: "idioma_id"});
  compra.belongsTo(ingresso, { as: "ingresso_filme", foreignKey: "ingresso_filme_id"});
  ingresso.hasMany(compra, { as: "compras", foreignKey: "ingresso_filme_id"});
  compra.belongsTo(ingresso, { as: "ingresso_filme_idioma", foreignKey: "ingresso_filme_idioma_id"});
  ingresso.hasMany(compra, { as: "ingresso_filme_idioma_compras", foreignKey: "ingresso_filme_idioma_id"});
  compra.belongsTo(ingresso, { as: "ingresso_sala_cinema_cidade", foreignKey: "ingresso_sala_cinema_cidade_id"});
  ingresso.hasMany(compra, { as: "ingresso_sala_cinema_cidade_compras", foreignKey: "ingresso_sala_cinema_cidade_id"});
  compra.belongsTo(ingresso, { as: "ingresso_sala_cinema", foreignKey: "ingresso_sala_cinema_id"});
  ingresso.hasMany(compra, { as: "ingresso_sala_cinema_compras", foreignKey: "ingresso_sala_cinema_id"});
  compra.belongsTo(ingresso, { as: "ingresso_sala", foreignKey: "ingresso_sala_id"});
  ingresso.hasMany(compra, { as: "ingresso_sala_compras", foreignKey: "ingresso_sala_id"});
  compra.belongsTo(ingresso, { as: "ingresso_sala_poltrona", foreignKey: "ingresso_sala_poltronas_id"});
  ingresso.hasMany(compra, { as: "ingresso_sala_poltronas_compras", foreignKey: "ingresso_sala_poltronas_id"});
  compra.belongsTo(ingresso, { as: "ingresso_sala_sessao", foreignKey: "ingresso_sala_sessao_id"});
  ingresso.hasMany(compra, { as: "ingresso_sala_sessao_compras", foreignKey: "ingresso_sala_sessao_id"});
  compra.belongsTo(ingresso, { as: "ingresso_tipoingresso", foreignKey: "ingresso_tipoingresso_id"});
  ingresso.hasMany(compra, { as: "ingresso_tipoingresso_compras", foreignKey: "ingresso_tipoingresso_id"});
  compra.belongsTo(ingresso, { as: "ingresso_usuario", foreignKey: "ingresso_usuario_id"});
  ingresso.hasMany(compra, { as: "ingresso_usuario_compras", foreignKey: "ingresso_usuario_id"});
  sala.belongsTo(poltronas, { as: "poltrona", foreignKey: "poltronas_id"});
  poltronas.hasMany(sala, { as: "salas", foreignKey: "poltronas_id"});
  ingresso.belongsTo(sala, { as: "sala_cinema_cidade", foreignKey: "sala_cinema_cidade_id"});
  sala.hasMany(ingresso, { as: "ingressos", foreignKey: "sala_cinema_cidade_id"});
  ingresso.belongsTo(sala, { as: "sala_cinema", foreignKey: "sala_cinema_id"});
  sala.hasMany(ingresso, { as: "sala_cinema_ingressos", foreignKey: "sala_cinema_id"});
  ingresso.belongsTo(sala, { as: "sala", foreignKey: "sala_id"});
  sala.hasMany(ingresso, { as: "sala_ingressos", foreignKey: "sala_id"});
  ingresso.belongsTo(sala, { as: "sala_poltrona", foreignKey: "sala_poltronas_id"});
  sala.hasMany(ingresso, { as: "sala_poltronas_ingressos", foreignKey: "sala_poltronas_id"});
  ingresso.belongsTo(sala, { as: "sala_sessao", foreignKey: "sala_sessao_id"});
  sala.hasMany(ingresso, { as: "sala_sessao_ingressos", foreignKey: "sala_sessao_id"});
  sala.belongsTo(sessao, { as: "sessao", foreignKey: "sessao_id"});
  sessao.hasMany(sala, { as: "salas", foreignKey: "sessao_id"});
  poltronas.belongsTo(tipoPoltrona, { as: "tipoPoltrona_id1_tipoPoltrona", foreignKey: "tipoPoltrona_id1"});
  tipoPoltrona.hasMany(poltronas, { as: "poltronas", foreignKey: "tipoPoltrona_id1"});
  ingresso.belongsTo(tipoingresso, { as: "tipoingresso", foreignKey: "tipoingresso_id"});
  tipoingresso.hasMany(ingresso, { as: "ingressos", foreignKey: "tipoingresso_id"});
  QRCode.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(QRCode, { as: "QRCodes", foreignKey: "usuario_id"});
  ingresso.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(ingresso, { as: "ingressos", foreignKey: "usuario_id"});

  return {
    QRCode,
    cidade,
    cinema,
    compra,
    filme,
    genero,
    idioma,
    ingresso,
    poltronas,
    sala,
    sessao,
    tipoPoltrona,
    tipoingresso,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
