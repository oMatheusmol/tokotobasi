const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { ValidationComposite } from '../../../../../common/validation/validation-composite';
import { `+resourceUpper+` } from '../interface/`+resourceLower+`-interface';
import { FindAll`+resourceUpper+`sRepository } from '../interface/find-all-`+resourceLower+`s-repository';
import { FindAll`+resourceUpper+`sRequestModel } from '../validation/find-all-`+resourceLower+`s-validation';

export class FindAll`+resourceUpper+`s {
  constructor(
    private readonly findAll`+resourceUpper+`sRepository: FindAll`+resourceUpper+`sRepository,
    private readonly validation: ValidationComposite<FindAll`+resourceUpper+`sRequestModel>,
  ) {}

  async findAll(request?: FindAll`+resourceUpper+`sRequestModel): Promise<`+resourceUpper+`[]> | never {
    let order: 'desc' | 'asc' = 'desc';
    let limit = 100;
    let offset = 0;

    if (request) {
      if (request.order) order = request.order;
      if (request.limit) limit = request.limit;
      if (request.offset) offset = request.offset;
    }

    await this.validation.validate({ order, limit, offset });
    const `+resourceLower+`s = await this.findAll`+resourceUpper+`sRepository.find(order, limit, offset);
    return `+resourceLower+`s;
  }
}
`;
    },
  };
  