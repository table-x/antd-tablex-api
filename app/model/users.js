'use strict';

module.exports = app => {

  const { Sequelize, model } = app;
  const { STRING, INTEGER, DATE, DECIMAL, ENUM } = Sequelize;

  const Users = model.define('users', {
    userId: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: STRING(32),
    mobile: STRING(32),
    createdAt: DATE,
    updatedAt: DATE,
    email: STRING(64),
    city: STRING(64),
    note: STRING(64),
    amount: DECIMAL(14, 4),
    registerIp: STRING(64),
    permission: ENUM('normal', 'rich', 'admin')
  }, {
    timestamps: false
  });

  /*Users.prototype.associate = function() {
    model.User.hasMany(model.Post, { as: 'posts', foreignKey: 'userId' });
  };
*/
  return Users;
};

