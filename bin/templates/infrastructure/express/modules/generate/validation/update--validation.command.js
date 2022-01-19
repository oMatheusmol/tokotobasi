const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { `+resourceUpper+`CompositeValidation } from './`+resourceLower+`-composite-validation';
import { `+resourceUpper+`RequiredFieldsValidation } from './`+resourceLower+`-required-fields-validation';

export class Update`+resourceUpper+`Validation extends `+resourceUpper+`CompositeValidation {
  constructor() {
    super();
    this.add(new `+resourceUpper+`RequiredFieldsValidation());
  }
}
`;
    },
  };
  