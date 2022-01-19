const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { ExistsError } from '../../../../../common/errors/exists-error';
import { Create`+resourceUpper+`Repository } from '../interface/create-`+resourceLower+`-repository-interface';
import { Find`+resourceUpper+`ByNameRepository } from '../interface/find-`+resourceLower+`-by-name-repository';
import { Create`+resourceUpper+`Validation } from '../validation/create-`+resourceLower+`-validation';
import { Create`+resourceUpper+`BodyRequest } from '../interface/create-`+resourceLower+`-body-request';
import { `+resourceUpper+` } from '../interface/`+resourceLower+`-interface';

export class Create`+resourceUpper+` {
  constructor(
    private readonly create`+resourceUpper+`Repository: Create`+resourceUpper+`Repository,
    private readonly find`+resourceUpper+`ByNameRespository: Find`+resourceUpper+`ByNameRepository,
    private readonly validation: Create`+resourceUpper+`Validation,
  ) {}

  public async create(_request: Create`+resourceUpper+`BodyRequest): Promise<`+resourceUpper+`> {
    await this.validation.validate(_request);

    const `+resourceLower+`Exist = await this.find`+resourceUpper+`ByNameRespository.findByName(_request.name);

    if (`+resourceLower+`Exist) throw new ExistsError('`+resourceUpper+` already created');

    const `+resourceLower+` = await this.create`+resourceUpper+`Repository.create(_request);
    return `+resourceLower+`;
  }
}
`;
    },
  };
  