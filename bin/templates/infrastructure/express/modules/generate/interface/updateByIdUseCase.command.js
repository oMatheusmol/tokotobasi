const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { Update`+resourceUpper+`BodyRequest } from './update-`+resourceLower+`-body-request';

export interface Update`+resourceUpper+`UseCase {
  update(id: string, requestModel: Update`+resourceUpper+`BodyRequest): Promise<number | never>;
}
`;
    },
  };
  