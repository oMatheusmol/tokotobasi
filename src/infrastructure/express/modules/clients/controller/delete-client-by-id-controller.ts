/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { genericStringSanitizerSingleton } from '../../../../../common/generic/generic-string-sanitizer-adapter';
import { GenericMessageResponse } from '../../../../../presentation/responses/generic-message-response';
import { Controller, RequestModel, ResponseHandler, ResponseModel } from '../../../adapters/express-route-adapter';
import { DeleteClientByIdUseCase } from '../interface/delete-client-by-id-use-case';

export class DeleteClientByIdController implements Controller {
  constructor(
    private readonly deleteClientByIdUseCase: DeleteClientByIdUseCase,
    private readonly genericDeleteProductById: ResponseHandler<GenericMessageResponse>,
  ) {}
  async handleRequest(requestModel: RequestModel<void, { id: string }>): Promise<ResponseModel<any>> | never {
    if (!requestModel || !requestModel.params || !requestModel.params.id) {
      throw new RequestValidationError('Missing params');
    }

    const sanitizedId = genericStringSanitizerSingleton.sanitize(requestModel.params.id);

    await this.deleteClientByIdUseCase.deleteById(sanitizedId);
    return await this.genericDeleteProductById.response({ message: 'Client deleted' });
  }
}
