const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { `+resourceUpper+` } from './`+resourceLower+`-interface';
import { Create`+resourceUpper+`BodyRequest } from './create-`+resourceLower+`-body-request';

export interface Create`+resourceUpper+`UseCase {
  create(requestModel: Create`+resourceUpper+`BodyRequest): Promise<`+resourceUpper+`>;
}
`;
    },
  };
  