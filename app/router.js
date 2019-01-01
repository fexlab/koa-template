const Router = require('koa-router');
const router = new Router();

const HomeController = require('./controller/home')

module.exports = app => {
  router
    .get('/', HomeController.index)
    .post('/test/:id', HomeController.test)

  app
    .use(router.routes())
    .use(router.allowedMethods())
}
