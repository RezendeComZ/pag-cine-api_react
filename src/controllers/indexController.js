const { Filme } = require('../models')

module.exports = {
  index(req, res) {
    res.send('Hello')
  },
  async listaFilmes(req, res, next) {
    const lista = await Filme.findAll();
    console.log(lista)
    res.json(lista)
  },
  retornoJson(req, res) {
    let textos = req.body
    res.json(textos)
  }
}