const { Filme } = require('../models')

module.exports = {
  index(req, res) {
    res.send('Hello')
  },
  async listaFilmes(req, res, next) {
    const lista = await Filme.findAll();
    res.send(lista)
  },
  async filme(req, res, next) {
    const { id } = req.params
    const filmeId = await Filme.findOne({
      where: {
        id: id
      }
    });
    console.log('entrou aqui')
    res.send(filmeId)
  },
  retornoJson(req, res) {
    let textos = req.body
    res.json(textos)
  }
}