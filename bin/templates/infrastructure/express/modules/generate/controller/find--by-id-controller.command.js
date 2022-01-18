const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { Controller, RequestModel, ResponseHandler } from '../../../adapters/express-route-adapter';
import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { Find`+resourceUpper+`ByIdUseCase } from '../interface/find-`+resourceLower+`-by-id-use-case';
import { `+resourceUpper+` } from '../interface/`+resourceLower+`-interface';

export class Find`+resourceUpper+`ByIdController implements Controller<`+resourceUpper+` | never> {
  constructor(
    private readonly repository: Find`+resourceUpper+`ByIdUseCase,
    private readonly presenter: ResponseHandler<`+resourceUpper+`>,
  ) {}

  public async handleRequest(requestModel: RequestModel<void, { id: string }>) {
    if (!requestModel || !requestModel.params || !requestModel.params.id) {
      throw new RequestValidationError('Missing params');
    }

    const { id } = requestModel.params;
    const `+resourceLower+` = await this.repository.findById(id);
    return await this.presenter.response(`+resourceLower+`);
  }
}
`;
    },
  };
  