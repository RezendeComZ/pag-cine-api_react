const {
  Router
} = require('express')
const indexController = require('../controllers/indexController')
const router = Router()

router.get('/', indexController.index)
router.get('/listaFilmes', indexController.listaFilmes)
router.get('/filme/:id', indexController.filme)
router.post('/retornoJson', indexController.retornoJson)

module.exports = router