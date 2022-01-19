const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { isString } from '../../../../../common/utils/isString';
import { ValidationComposite } from '../../../../../common/validation/validation-composite';
import { Create`+resourceUpper+`BodyRequest } from '../interface/create-`+resourceLower+`-body-request';
import { `+resourceUpper+` } from '../interface/`+resourceLower+`-interface';

export class `+resourceUpper+`RequiredFieldsValidation extends ValidationComposite<`+resourceUpper+`> {
  public async validate(request: Create`+resourceUpper+`BodyRequest): Promise<void> | never {
    const error = new RequestValidationError('Invalid request');
    const { name } = request;

    if (!isString(name) || !name) {
      error.messages.push('Missing field name');
    }

    if (error.messages.length > 1) {
      throw error;
    }
  }
}      
`;
    },
  };
  