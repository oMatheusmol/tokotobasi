import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { UnauthorizedError } from '../../../../../common/errors/unauthorized-error';
import { genericStringSanitizerSingleton } from '../../../../../common/generic/generic-string-sanitizer-adapter';
import { isString } from '../../../../../common/utils/isString';
import { Controller, RequestModel, ResponseHandler, ResponseModel } from '../../../adapters/express-route-adapter';
import { SignInRequestModel } from '../interface/sign-in-request-model-interface';
import { SignInResponseModel } from '../interface/sign-in-response-model-interface';
import { SignInUseCase } from '../interface/sign-in-use-case-interface';

export class SignInController implements Controller<SignInResponseModel | never> {
constructor(
    private readonly signInUseCase: SignInUseCase,
    private readonly presenter: ResponseHandler<SignInResponseModel>,
) {}

async handleRequest(
    signInModel: RequestModel<SignInRequestModel>,
): Promise<ResponseModel<SignInResponseModel>> | never {
    if (!signInModel || !signInModel.body) {
    throw new RequestValidationError('Invalid request');
    }

    const { email, password } = signInModel.body;
    const emailOrPasswordIsEmpty = !email || !password;
    const valuesAreNotStrings = !isString(email) || !isString(password);

    if (emailOrPasswordIsEmpty || valuesAreNotStrings) {
    throw new UnauthorizedError('Missing e-mail or password');
    }

    const sanitizedValues = {
    email: genericStringSanitizerSingleton.sanitize(email),
    password: genericStringSanitizerSingleton.sanitize(password),
    };

    const jwtToken = await this.signInUseCase.verify(sanitizedValues);

    return await this.presenter.response(jwtToken);
}
}
