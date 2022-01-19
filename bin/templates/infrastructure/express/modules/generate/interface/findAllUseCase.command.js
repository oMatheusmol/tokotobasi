const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { FindAll`+resourceUpper+`sRequestModel } from '../../`+resourceLower+`s/validation/find-all-`+resourceLower+`s-validation';
import { `+resourceUpper+` } from './`+resourceLower+`-interface';

export interface FindAll`+resourceUpper+`sUseCase {
  findAll(request?: FindAll`+resourceUpper+`sRequestModel): Promise<`+resourceUpper+`[]> | never;
}
`;
    },
  };
  