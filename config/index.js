var debug = require('./debug');
var development = require('./development');
var test = require('./test');
var production = require('./production');

module.exports = {
  debug,
  development,
  test,
  production
}[process.env.RUN_ENV || 'development'];
