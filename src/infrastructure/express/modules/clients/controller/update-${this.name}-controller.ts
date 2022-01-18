/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { genericStringSanitizerSingleton } from '../../../../../common/generic/generic-string-sanitizer-adapter';
import { objectKeyExists } from '../../../../../common/helpers/object-key-exists';
import { Controller, ResponseHandler } from '../../../adapters/express-route-adapter';
import { UpdateClientUseCase } from '../interface/update-client-use-case';
import { GenericMessageResponse } from '../../../../../presentation/responses/generic-message-response';
import { UpdateClientBodyRequest } from '../interface/update-client-body-request';

export class UpdateClientController implements Controller<void | never> {
  constructor(
    private readonly useCase: UpdateClientUseCase,
    private readonly genericUpdatedResponse: ResponseHandler<GenericMessageResponse>,
  ) {}

  public async handleRequest(requestModel: UpadateGenericRequest): Promise<any> {
    if (
      !objectKeyExists(requestModel, 'body') ||
      !objectKeyExists(requestModel, 'params') ||
      !objectKeyExists(requestModel.params, 'id')
    ) {
      throw new RequestValidationError('Invalid request');
    }

    const { id } = requestModel.params;
    const { body } = requestModel;

    const sanitizedBody = {
      name: this.sanitize(body.name),
      avatar: this.sanitize(body.avatar),
      address: this.sanitize(body.address),
    };

    await this.useCase.update(id, sanitizedBody);
    return this.genericUpdatedResponse.response({ message: 'Client updated' });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private sanitize(value: any): string | never {
    if (!value) {
      throw new RequestValidationError('Invalid request');
    }

    return genericStringSanitizerSingleton.sanitize(value);
  }
}

type UpadateGenericRequest = {
  body: UpdateClientBodyRequest;
  params: {
    id: string;
  };
};
