import { jwtTokenAdapterSingleton } from '../../../../../common/security/jwt-token-adapter';
import { GenericCreatedResponse } from '../../../../../presentation/responses/generic-created-response';
import { SignInResponseModel } from '../interface/sign-in-response-model-interface';
import { CreateTokenRepository } from '../repository/create-token-repository';
import { FindByTokenRepository } from '../repository/find-by-token-repository';
import { RefreshToken } from '../use-case/refresh-token-use-case';
import { RefreshTokenController } from '../controller/refresh-token-controller';

export const refreshUserControllerFactory = () => {
const jwtAdapter = jwtTokenAdapterSingleton;
const createTokenRepository = new CreateTokenRepository();
const findByTokenRepository = new FindByTokenRepository();
const refreshTokenUseCase = new RefreshToken(createTokenRepository, findByTokenRepository, jwtAdapter);
const createdPresenter = new GenericCreatedResponse<SignInResponseModel>();
const refreshTokenController = new RefreshTokenController(refreshTokenUseCase, createdPresenter);

return {
    refreshTokenController,
};
};
