const {Router} = require('express')

const routes = new Router()

const lancamentoController = require('./controllers/lancamentoController')
const marcaController = require('./controllers/marcaController')

routes.post('/dashboard', lancamentoController.getMain)

routes.post('/lancamento', lancamentoController.postLancamento)

routes.get('/marcas', marcaController.getMarcas)

module.exports = routes
