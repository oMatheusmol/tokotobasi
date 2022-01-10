module.exports = {
    get: function (resource) {
      return `/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { genericStringSanitizerSingleton } from '../../../../../common/generic/generic-string-sanitizer-adapter';
import { objectKeyExists } from '../../../../../common/helpers/object-key-exists';
import { GenericMessageResponse } from '../../../../../presentation/responses/generic-message-response';
import { Controller, ResponseHandler } from '../../../adapters/express-route-adapter';
import { UpdateUserUseCase } from '../interface/update-use-use-case';
import { UpdateUserBodyRequest } from '../interface/update-user-body-request';

export class UpdateUserController implements Controller<void | never | string> {
constructor(
    private readonly updateUser: UpdateUserUseCase,
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
    email: this.sanitize(body.email),
    password: this.sanitize(body.password),
    confirmPassword: this.sanitize(body.confirmPassword),
    oldPassword: this.sanitize(body.oldPassword),
    };

    await this.updateUser.update(id, sanitizedBody);
    return this.genericUpdatedResponse.response({ message: 'User updated' });
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
body: UpdateUserBodyRequest;
params: {
    id: string;
};
};                     
`;
    },
  };
  