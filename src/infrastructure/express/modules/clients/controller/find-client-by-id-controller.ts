import { Controller, RequestModel, ResponseHandler } from '../../../adapters/express-route-adapter';
import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { FindClientByIdUseCase } from '../interface/find-client-by-id-use-case';
import { Client } from '../interface/client-interface';

export class FindClientByIdController implements Controller<Client | never> {
  constructor(
    private readonly repository: FindClientByIdUseCase,
    private readonly presenter: ResponseHandler<Client>,
  ) {}

  public async handleRequest(requestModel: RequestModel<void, { id: string }>) {
    if (!requestModel || !requestModel.params || !requestModel.params.id) {
      throw new RequestValidationError('Missing params');
    }

    const { id } = requestModel.params;
    const client = await this.repository.findById(id);
    return await this.presenter.response(client);
  }
}
