const Koa = require('koa');
const middleware = require('./app/middleware');
const router = require('./app/router');
const config = require('./config');

const app = new Koa();
const host = process.env.HOST || config.host;
const port = process.env.PORT || config.port;

// 注册中间件
middleware(app);

// 注册路由
router(app);

app.listen(port, host);
console.log('Server listening on ' + host + ':' + port);
