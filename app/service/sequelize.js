'use strict';

const Service = require('egg').Service;

class SequelizeService extends Service {

  // where = { key: value }
  /* get */

  // success: { ... }, failed: null
  async findById(table, id) {
    const { model } = this.ctx;
    return await model[table].findById(id);
  }

  async findAll(table) {
    const { model } = this.ctx;
    return await model[table].findAll();
  }

  async findAllByWhere(table, where) {
    const { model } = this.ctx;
    return await model[table].findAll({ where });
  }

  // success: { ... }, failed: null
  async findOneByWhere(table, where) {
    const { model } = this.ctx;
    return await model[table].findOne({ where });
  }

  // result: { count: 0, rows: [] }
  async findAndCountAllByWhere(table, where, limit, offset) {
    const { model } = this.ctx;
    return await model[table].findAndCountAll({ where, limit, offset });
  }

  /* put */

  // result: [1]
  async update(table, updateData, where) {
    const { model } = this.ctx;
    return await model[table].update(updateData, { where });
  }

  /* post */

  // result: { ...new row  }
  async create(table, createData) {
    const { model } = this.ctx;
    return await model[table].create(createData);
  }

  async bulkCreate(table, createDataArray) {
    const { model } = this.ctx;
    return await model[table].bulkCreate(createDataArray);
  }

  /* delete */

  // success: 1, failed: 0
  async destroy(table, where) {
    const { model } = this.ctx;
    return await model[table].destroy({ where });
  }

}

module.exports = SequelizeService;
