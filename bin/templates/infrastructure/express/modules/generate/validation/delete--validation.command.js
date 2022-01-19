const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { ValidateStringNotEmpty } from '../../../../../common/validation/validate-string-not-empty';
import { `+resourceUpper+`CompositeValidation } from './`+resourceLower+`-composite-validation';

export class Delete`+resourceUpper+`ByIdValidation extends `+resourceUpper+`CompositeValidation {
  constructor() {
    super();
    this.add(new ValidateStringNotEmpty());
  }
}
`;
    },
  };
  