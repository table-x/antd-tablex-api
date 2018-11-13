# <p align="center">Antd-tablex-api</p>

#### <p align="center">[English](../README.md) | [简体中文](./README.zhCN.md)</p>

<p align="center">
    <a href="https://github.com/mzonghao/antd-tablex-api/blob/master/LICENSE">
        <img src="https://img.shields.io/npm/l/antd-tablex.svg?style=flat-square" alt="License">
    </a>
</p>

#### <p align="center">antd-tablex 的后端 example，基于[eggjs](https://github.com/eggjs/egg)</p>

## 目录
- [启动配置](#启动配置)
- [开发启动](#开发启动)
- [生产启动](#生产启动)
- [生产停止](#生产停止)

***
### 启动配置
在 config 中新建 config.sequelize.js 并配置如下
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

### 开发启动
```
npm run dev
```

### 生产启动
```
npm start
```

### 生产停止
```
npm run stop
```
