const path = require('path');
const ip = require('ip');
const bodyParser = require('koa-bodyparser');
const staticFiles = require('koa-static');
const compress = require('koa-compress');
const nunjucks = require('koa-nunjucks-2');

const config = require('../../config');

const httpError = require('./http-error');
const logger = require('./logger');

module.exports = app => {
  app.use(async (ctx, next) => {
    if (ctx.url == '/favicon.ico') return;
    await next();
  })

  // 错误处理
  app.use(httpError({
    env: config.env,
    errorPageFolder: path.resolve(__dirname, '../view/error')
  }))

  // 日志记录
  app.use(logger({
    env: config.env,
    projectName: 'koa2-template',
    appLogLevel: 'debug',
    dir: 'logs',
    serverIp: ip.address()
  }));

  // gzip压缩
  app.use(compress());

  // post请求中间件
  app.use(bodyParser());

  // 模版引擎
  app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, '../view'),
    nunjucksConfig: {
      trimBlocks: true
    }
  }))

  // 静态文件中间件
  app.use(staticFiles(path.resolve(__dirname, '../../public')));
}
