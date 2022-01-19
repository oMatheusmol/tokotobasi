const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { ValidationComposite } from '../../../../../common/validation/validation-composite';

export class FindAll`+resourceUpper+`sValidation extends ValidationComposite<FindAll`+resourceUpper+`sRequestModel> {
  async validate(request?: FindAll`+resourceUpper+`sRequestModel): Promise<void> | never {
    if (!request) {
      return;
    }

    if (request.order && !request.order.match(/desc|asc/i)) {
      throw new RequestValidationError('Order must be desc or asc');
    }

    this.validatePositiveNumberIfExists(request.limit);
    this.validatePositiveNumberIfExists(request.offset);
  }

  private validatePositiveNumberIfExists(value?: string | number): void | never {
    if (!value) {
      return;
    }

    if (!this.isAPositiveNumber(value)) {
      throw new RequestValidationError('Expected a positive number');
    }
  }

  private isAPositiveNumber(value: string | number): boolean {
    if (Number.isNaN(+value)) {
      return false;
    }

    if (+value < 0) {
      return false;
    }

    return true;
  }
}
export type FindAll`+resourceUpper+`sRequestModel = {
  order?: 'desc' | 'asc';
  limit?: number;
  offset?: number;
};
`;
    },
  };
  