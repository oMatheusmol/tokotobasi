const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { `+resourceUpper+` } from './`+resourceLower+`-interface';

export interface Find`+resourceUpper+`ByIdUseCase {
  findById(id: string): Promise<`+resourceUpper+` | never>;
}
`;
    },
  };
  