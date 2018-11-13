# <p align="center">Antd-tablex-api</p>
#### <p align="center">backend example of antd-tablex, [eggjs](https://github.com/eggjs/egg)-based</p>
[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

[English](./README.md) | [简体中文](./docs/README.zhCN.md)

## Contents
- [conf](#conf)
- [development start](#development-start)
- [deploy start](#deploy-start)
- [deploy stop](#deploy-stop)
***
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

### development-start
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