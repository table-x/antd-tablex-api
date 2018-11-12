'use strict';

const Service = require('egg').Service;
const qs = require('qs');
const isArray = require('lodash/isArray');
const each = require('lodash/each');

class SearchService extends Service {

  parseToWhere(searchQueryString) {
    const searchQueryArray = this.translateSearchQuery(searchQueryString);
    return this.parseSearchQuery(searchQueryArray);
  }

  translateSearchQuery(sqString) {
    if (!sqString) {
      return undefined;
    }
    const itemsObj = qs.parse(sqString);
    const items = [];
    each(itemsObj, (value, index) => {
      items[index] = value;
    });
    return items;
  }

  parseSearchQuery(searchQuery) {
    const where = {};
    if (isArray(searchQuery)) {
      searchQuery.forEach(item => {
        where[item.keyword] = {};
        switch (item.predicate) {
          case '$eq':
          case '$ne':
          case '$gt':
          case '$gte':
          case '$lt':
          case '$lte':
          case '$in':
          case '$notIn':
            where[item.keyword][item.predicate] = item.value;
            break;
          case '$like':
          case '$notLike':
            where[item.keyword][item.predicate] = `%${item.value}%`;
            break;
          default:
            break;
        }
      });
    }
    return where;
  }

}

module.exports = SearchService;
