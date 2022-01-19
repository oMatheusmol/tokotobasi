const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { NotFoundError } from '../../../../../common/errors/not-found-error';
import { ValidateStringNotEmpty } from '../../../../../common/validation/validate-string-not-empty';
import { `+resourceUpper+` } from '../interface/`+resourceLower+`-interface';
import { Find`+resourceUpper+`ByIdRepository } from '../interface/find-`+resourceLower+`-by-id-repository';

export class Find`+resourceUpper+`ById {
  constructor(
    private readonly repository: Find`+resourceUpper+`ByIdRepository,
    private readonly validation: ValidateStringNotEmpty,
  ) {}

  public async findById(id: string): Promise<`+resourceUpper+` | never> {
    this.validation.validate(id);
    const `+resourceLower+` = await this.repository.findById(id);

    if (!`+resourceLower+`) throw new NotFoundError('`+resourceUpper+` method not found');

    return `+resourceLower+`;
  }
}
`;
    },
  };
  