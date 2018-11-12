'use strict';

module.exports = {
  write: true,
  plugin: 'autod-egg',
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures'
  ],
  test: 'scripts',
  dep: [
    'egg'
  ],
  devdep: [
    'autod',
    'autod-egg',
    'egg-bin',
    'eslint',
    'eslint-config-egg'
  ]
};
