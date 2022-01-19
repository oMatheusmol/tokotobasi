const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `
export interface Delete`+resourceUpper+`ByIdUseCase {
  deleteById(id: string): Promise<number> | never;
}
`;
    },
  };
  