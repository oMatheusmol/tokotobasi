const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { NotFoundError } from '../../../../../common/errors/not-found-error';
import { ValidationComposite } from '../../../../../common/validation/validation-composite';
import { Delete`+resourceUpper+`ByIdRepository } from '../interface/delete-`+resourceLower+`-by-id';
import { Find`+resourceUpper+`ByIdRepository } from '../interface/find-`+resourceLower+`-by-id-repository';

export class Delete`+resourceUpper+`ById {
  constructor(
    private readonly delete`+resourceUpper+`ByIdRepository: Delete`+resourceUpper+`ByIdRepository,
    private readonly find`+resourceUpper+`ByIdRepository: Find`+resourceUpper+`ByIdRepository,
    private readonly validation: ValidationComposite,
  ) {}

  async deleteById(id: string): Promise<number> | never {
    await this.validation.validate(id);
    const `+resourceLower+` = await this.find`+resourceUpper+`ByIdRepository.findById(id);

    if (!`+resourceLower+`) {
      throw new NotFoundError('`+resourceUpper+` does not exist');
    }

    const deleted = await this.delete`+resourceUpper+`ByIdRepository.deleteById(id);
    return deleted;
  }
}
`;
    },
  };
  