# antd-tablex-api
#### backend example of antd-tablex, based in eggjs
[简体中文](./README.zhCN.md)

## List
- [configs](#configs)
- [development start](#development-start)
- [deploy start](#deploy-start)
***
## Content
### configs
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