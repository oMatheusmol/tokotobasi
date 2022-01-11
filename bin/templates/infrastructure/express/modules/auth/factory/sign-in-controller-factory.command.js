module.exports = {
    get: function (resource) {
      return `import { jwtTokenAdapterSingleton } from '../../../../../common/security/jwt-token-adapter';
import { BCryptAdapter } from '../../../../../common/utils/bcrypt-adapter';
import { GenericSuccessResponse } from '../../../../../presentation/responses/generic-success-response';
import { CreateTokenRepository } from '../repository/create-token-repository';
import { SignInValidation } from '../validation/sign-in-validation';
import { SignIn } from '../use-case/sign-in-use-case';
import { SignInResponseModel } from '../interface/sign-in-response-model-interface';
import { FindUserByEmailRepository } from '../../users/repository/find-user-by-email-repository';
import { SignInController } from '../controller/sign-in-controller';

export const signInControllerFactory = () => {
const jwtToken = jwtTokenAdapterSingleton;
const passwordHashing = new BCryptAdapter();
const signInValidation = new SignInValidation();
const createTokenRepositorySingleton = new CreateTokenRepository();
const findUserByEmailRepository = new FindUserByEmailRepository();

const signInUseCase = new SignIn(
    findUserByEmailRepository,
    passwordHashing,
    jwtToken,
    createTokenRepositorySingleton,
    signInValidation,
);

const presenter = new GenericSuccessResponse<SignInResponseModel>();
const signInController = new SignInController(signInUseCase, presenter);

return {
    signInController,
    signInUseCase,
    jwtToken,
    passwordHashing,
    signInValidation,
    createTokenRepositorySingleton,
    presenter,
};
};
`;
    },
  };
  