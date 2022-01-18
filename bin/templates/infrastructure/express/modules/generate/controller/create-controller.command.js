const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { Controller, RequestModel, ResponseHandler } from '../../../adapters/express-route-adapter';
import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { objectKeyExists } from '../../../../../common/helpers/object-key-exists';
import { genericStringSanitizerSingleton } from '../../../../../common/generic/generic-string-sanitizer-adapter';
import { Create`+resourceUpper+`UseCase } from '../interface/create-`+resourceLower+`-use-case';
import { Create`+resourceUpper+`BodyRequest } from '../interface/create-`+resourceLower+`-body-request';
import { `+resourceUpper+` } from '../interface/`+resourceLower+`-interface';

type RequestOptionalBody = RequestModel<Create`+resourceUpper+`BodyRequest>;

export class Create`+resourceUpper+`Controller implements Controller<`+resourceUpper+` | never> {
  constructor(
    private readonly repository: Create`+resourceUpper+`UseCase,
    private readonly presenter: ResponseHandler<`+resourceUpper+`>,
  ) {}

  public async handleRequest(requestModel: RequestOptionalBody) {
    if (!objectKeyExists(requestModel, 'body')) {
      throw new RequestValidationError('Missing body');
    }

    const { name, avatar, address } = requestModel.body;

    const sanitizedBody = {
      name: this.sanitize(name),
      avatar: this.sanitize(avatar),
      address: this.sanitize(address),
    };

    const `+resourceLower+` = await this.repository.create(sanitizedBody);
    return await this.presenter.response(`+resourceLower+`);
  }

  private sanitize(value: string): string {
    return genericStringSanitizerSingleton.sanitize(value);
  }
}
`;
    },
  };
  