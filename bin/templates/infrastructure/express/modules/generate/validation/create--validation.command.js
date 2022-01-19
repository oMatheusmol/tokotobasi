const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { `+resourceUpper+`RequiredFieldsValidation } from './`+resourceLower+`-required-fields-validation';
import { `+resourceUpper+`CompositeValidation } from './`+resourceLower+`-composite-validation';

export class Create`+resourceUpper+`Validation extends `+resourceUpper+`CompositeValidation {
  constructor() {
    super();
    this.add(new `+resourceUpper+`RequiredFieldsValidation());
  }
}
`;
    },
  };
  