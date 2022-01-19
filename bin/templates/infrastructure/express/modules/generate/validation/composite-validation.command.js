const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { InternalServerError } from '../../../../../common/errors/internal-server-error';
import { ValidationComposite } from '../../../../../common/validation/validation-composite';
import { `+resourceUpper+` } from '../interface/`+resourceLower+`-interface';

export class `+resourceUpper+`CompositeValidation extends ValidationComposite<`+resourceUpper+`> {
  public async validate(request: unknown): Promise<void> | never {
    if (this.validations.length === 0) {
      throw new InternalServerError('Composite has no validations');
    }

    for (const validation of this.validations) {
      await validation.validate(request);
    }
  }
}
`;
    },
  };
  