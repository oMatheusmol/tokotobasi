import { Controller, RequestModel, ResponseHandler } from '../../../adapters/express-route-adapter';
import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { objectKeyExists } from '../../../../../common/helpers/object-key-exists';
import { genericStringSanitizerSingleton } from '../../../../../common/generic/generic-string-sanitizer-adapter';
import { CreateClientUseCase } from '../interface/create-client-use-case';
import { CreateClientBodyRequest } from '../interface/create-client-body-request';
import { Client } from '../interface/client-interface';

type RequestOptionalBody = RequestModel<CreateClientBodyRequest>;

export class CreateClientController implements Controller<Client | never> {
  constructor(
    private readonly repository: CreateClientUseCase,
    private readonly presenter: ResponseHandler<Client>,
  ) {}

  public async handleRequest(requestModel: RequestOptionalBody) {
    if (!objectKeyExists(requestModel, 'body')) {
      throw new RequestValidationError('Missing body');
    }

    const { name } = requestModel.body;

    const sanitizedBody = {
      name: this.sanitize(name),
    };

    const client = await this.repository.create(sanitizedBody);
    return await this.presenter.response(client);
  }

  private sanitize(value: string): string {
    return genericStringSanitizerSingleton.sanitize(value);
  }
}
