const Controller = require('./base');

class HomeController extends Controller {
  static async index(ctx) {
    await ctx.render('home', {title: 'Home'});
  }

  static test(ctx) {
    ctx.body = {
      code: 200,
      message: '成功',
      data: {}
    }
  }
}

module.exports = HomeController;