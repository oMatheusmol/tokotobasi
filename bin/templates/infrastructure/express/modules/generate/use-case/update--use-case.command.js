const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { NotFoundError } from '../../../../../common/errors/not-found-error';
import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { RepositoryError } from '../../../../../common/errors/repository-error';
import { Update`+resourceUpper+`BodyRequest } from '../interface/update-`+resourceLower+`-body-request';
import { Find`+resourceUpper+`ByIdRepository } from '../interface/find-`+resourceLower+`-by-id-repository';
import { Update`+resourceUpper+`ByIdRepository } from '../interface/update-`+resourceLower+`-by-id-repository';
import { Update`+resourceUpper+`Validation } from '../validation/update-`+resourceLower+`-validation';
import { Find`+resourceUpper+`ByNameRepository } from '../interface/find-`+resourceLower+`-by-name-repository';

export class Update`+resourceUpper+` {
  constructor(
    private readonly find`+resourceUpper+`: Find`+resourceUpper+`ByIdRepository,
    private readonly update`+resourceUpper+`: Update`+resourceUpper+`ByIdRepository,
    private readonly find`+resourceUpper+`ByName: Find`+resourceUpper+`ByNameRepository,
    private readonly validation: Update`+resourceUpper+`Validation,
  ) {}
  public async update(id: string, requestModel: Update`+resourceUpper+`BodyRequest): Promise<number | never> {
    await this.validation.validate(requestModel);
    await this.check`+resourceUpper+`Exists(id);
    await this.checkNameMatchesWithId(requestModel, id);

    const updated = await this.update`+resourceUpper+`.update(id, requestModel);
    if (updated === 0 || !updated) throw new RepositoryError('Could not update `+resourceUpper+`');
    return updated;
  }

  private async check`+resourceUpper+`Exists(id: string): Promise<void | never> {
    const found`+resourceUpper+` = await this.find`+resourceUpper+`.findById(id);

    if (!found`+resourceUpper+`) throw new NotFoundError('`+resourceUpper+` does not exist');
  }

  private async checkNameMatchesWithId(_request: Update`+resourceUpper+`BodyRequest, id: string): Promise<void | never> {
    const founded = await this.find`+resourceUpper+`ByName.findByName(_request.name);

    if (founded && founded.id !== id) throw new RequestValidationError('`+resourceUpper+` name already exists');
  }
}
`;
    },
  };
  