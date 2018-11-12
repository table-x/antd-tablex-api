'use strict';

const Controller = require('egg').Controller;

class Users extends Controller {

  async getUsers() {
    const { ctx } = this;
    const { service, query } = ctx;
    const { limit: preLimit, offset: preOffset, searchQuery } = query;
    const limit = preLimit ? Number(preLimit) : undefined;
    const offset = preOffset ? Number(preOffset) : undefined;
    const where = service.search.parseToWhere(searchQuery);
    const result = await service.sequelize.findAndCountAllByWhere('Users', where, limit, offset);

    const { count, rows } = result;
    const results = {
      data: rows,
      total: count
    };
    ctx.body = { result: results };
  }

  async createUser() {
    const { ctx } = this;
    const { service } = this.ctx;
    const { body } = ctx.request;
    console.log(body, 'body body');
    const result = await service.sequelize.create('Users', body);
    ctx.body = { result };
  }
}

module.exports = Users;
