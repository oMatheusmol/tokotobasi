const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { `+resourceUpper+` } from './`+resourceLower+`-interface';

export interface FindAll`+resourceUpper+`sRepository {
  find(order: 'asc' | 'desc', limit: number, offset: number): Promise<`+resourceUpper+`[]>;
}
`;
    },
  };
  