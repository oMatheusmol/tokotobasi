import { Controller, RequestModel, ResponseHandler } from '../../../adapters/express-route-adapter';
import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { objectKeyExists } from '../../../../../common/helpers/object-key-exists';
import { genericStringSanitizerSingleton } from '../../../../../common/generic/generic-string-sanitizer-adapter';
import { User } from '../interface/user-interface';
import { CreateUserBodyRequest } from '../interface/create-user-body-request';
import { CreateUserUseCase } from '../interface/create-user-use-case';

type RequestOptionalBody = RequestModel<CreateUserBodyRequest>;

export class CreateUserController implements Controller<User | never> {
constructor(private readonly repository: CreateUserUseCase, private readonly presenter: ResponseHandler<User>) {}

public async handleRequest(requestModel: RequestOptionalBody) {
    if (!objectKeyExists(requestModel, 'body')) {
    throw new RequestValidationError('Missing body');
    }

    const { email, name, password, confirmPassword } = requestModel.body;

    const sanitizedBody = {
    email: this.sanitize(email),
    name: this.sanitize(name),
    password: this.sanitize(password),
    confirmPassword: this.sanitize(confirmPassword),
    };

    const user = await this.repository.create(sanitizedBody);
    return await this.presenter.response(user);
}

private sanitize(value: string): string {
    return genericStringSanitizerSingleton.sanitize(value);
}
}                
