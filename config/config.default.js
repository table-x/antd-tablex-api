'use strict';

const configSequelize = require('./config.sequelize');

module.exports = appInfo => {
  const config = {};

  config.name = 'antd-tablex-api';

  config.keys = appInfo.name + '_1539172025739_1010';

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    domainWhiteList: [
      'http://localhost:17100',
      'http://localhost:18110',
      'https://www.tablex.top',
      'https://vue-ssr.emiya.top'
    ]
  };

  config.cors = {
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  config.cluster = {
    listen: {
      port: 17200,
      hostname: '127.0.0.1'
    }
  };

  config.sequelize = configSequelize;

  /* example
  config.sequelize = {
    dialect: 'mysql',
    host: 'yourhost',
    port: '3306',
    username: 'your username',
    password: 'your password',
    database: 'your database'
  };*/

  return config;
};
