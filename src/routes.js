const { Router } = require('express');

const MailController = require('./controllers/MailController');
const UserController = require('./controllers/UserController');

const routes = Router();

// Métodos de HTTP: GET, POST, PUT, DELETE

// Respostas da arrow function: (req, res) => {}
// req: request, res: response

// Tipos de parametros:
// GET: Query params: req.query (Filtros, ordenação, paginação, ...)
// PUT or DELETE: Route params: req.params (Indentificar um recurso na alteração ou remoção)
// POST or PUT: Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

routes.get('/mails', MailController.index);
routes.post('/mails', MailController.store);

routes.post('/login', UserController.index);
routes.post('/user', UserController.store);

module.exports = routes;