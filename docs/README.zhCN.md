<div align="center">

# antd-tablex-api

[![NpmLicense](https://img.shields.io/npm/l/antd-tablex.svg)](https://github.com/mzonghao/antd-tablex-api/blob/master/LICENSE)

#### [English](../README.md) | [简体中文](./README.zhCN.md)
#### antd-tablex 的后端 example，基于[eggjs](https://github.com/eggjs/egg)、[sequelize](http://docs.sequelizejs.com/)

</div>

## 目录
- [启动配置](#启动配置)
- [开发启动](#开发启动)
- [生产启动](#生产启动)
- [生产停止](#生产停止)

***

## 快速开始

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
