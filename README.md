# <p align="center">Antd-tablex-api</p>

<p align="center">
    <a href="https://github.com/mzonghao/antd-tablex-api/blob/master/LICENSE">
        <img src="https://img.shields.io/npm/l/antd-tablex.svg?style=flat-square" alt="License">
    </a>
</p>

#### <p align="center"> [English](./README.md) | [简体中文](./docs/README.zhCN.md) </p>
#### <p align="center">backend example of antd-tablex, [eggjs](https://github.com/eggjs/egg)-based</p>

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
