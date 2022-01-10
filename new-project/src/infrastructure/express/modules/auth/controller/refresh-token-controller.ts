import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { genericStringSanitizerSingleton } from '../../../../../common/generic/generic-string-sanitizer-adapter';
import { isString } from '../../../../../common/utils/isString';
import { Controller, RequestModel, ResponseHandler, ResponseModel } from '../../../adapters/express-route-adapter';
import { RefreshTokenUseCase } from '../interface/refresh-token-use-case-interface';
import { SignInResponseModel } from '../interface/sign-in-response-model-interface';

type ControllerType = Controller<SignInResponseModel | never>;
type ResponseType = Promise<ResponseModel<SignInResponseModel>> | never;
type RequestType = RequestModel<{ token: string }>;

export class RefreshTokenController implements ControllerType {
constructor(
    private readonly refreshTokenUseCase: RefreshTokenUseCase,
    private readonly presenter: ResponseHandler<SignInResponseModel>,
) {}

async handleRequest(requestModel: RequestType): ResponseType {
    if (!requestModel || !requestModel.body || !requestModel.body.token) {
    throw new RequestValidationError('Invalid request');
    }

    const { token } = requestModel.body;

    if (!isString(token)) {
    throw new RequestValidationError('Invalid token');
    }

    const sanitizedToken = genericStringSanitizerSingleton.sanitize(token);
    const response = await this.refreshTokenUseCase.refresh(sanitizedToken);

    return await this.presenter.response(response);
}
}     
