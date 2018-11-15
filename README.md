<div align="center">

# antd-tablex-api

[![NpmLicense](https://img.shields.io/npm/l/antd-tablex.svg)](https://github.com/mzonghao/antd-tablex-api/blob/master/LICENSE)

#### [English](./README.md) | [简体中文](./docs/README.zhCN.md)
#### backend example of antd-tablex, [eggjs](https://github.com/eggjs/egg)-based,use [sequelize](http://docs.sequelizejs.com/)

</div>

## Contents
- [conf](#conf)
- [develop start](#develop-start)
- [deploy start](#deploy-start)
- [deploy stop](#deploy-stop)
***

## Quick start

### conf
create new file config.sequelize.js in dir config.
```
module.exports = {
    dialect: 'mysql',
    host: 'yourhost',
    port: '3306',
    username: 'your username',
    password: 'your password',
    database: 'your database'
};
```

### develop-start
```
npm run dev
```

### deploy-start
```
npm start
```

### deploy-stop
```
npm run stop
```
