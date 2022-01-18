const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { genericStringSanitizerSingleton } from '../../../../../common/generic/generic-string-sanitizer-adapter';
import { GenericMessageResponse } from '../../../../../presentation/responses/generic-message-response';
import { Controller, RequestModel, ResponseHandler, ResponseModel } from '../../../adapters/express-route-adapter';
import { Delete`+resourceUpper+`ByIdUseCase } from '../interface/delete-`+resourceLower+`-by-id-use-case';

export class Delete`+resourceUpper+`ByIdController implements Controller {
  constructor(
    private readonly delete`+resourceUpper+`ByIdUseCase: Delete`+resourceUpper+`ByIdUseCase,
    private readonly genericDeleteProductById: ResponseHandler<GenericMessageResponse>,
  ) {}
  async handleRequest(requestModel: RequestModel<void, { id: string }>): Promise<ResponseModel<any>> | never {
    if (!requestModel || !requestModel.params || !requestModel.params.id) {
      throw new RequestValidationError('Missing params');
    }

    const sanitizedId = genericStringSanitizerSingleton.sanitize(requestModel.params.id);

    await this.delete`+resourceUpper+`ByIdUseCase.deleteById(sanitizedId);
    return await this.genericDeleteProductById.response({ message: '`+resourceUpper+` deleted' });
  }
}
`;
    },
  };
  