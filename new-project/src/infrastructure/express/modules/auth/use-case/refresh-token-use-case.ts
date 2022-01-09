import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { UnauthorizedError } from '../../../../../common/errors/unauthorized-error';
import { JwtToken } from '../../../../../common/security/jwt-token';
import { formatDateTime } from '../../../../../common/utils/format-date-time';
import { CreateTokenRepository } from '../interface/create-token-repository-interface';
import { FindTokenByTokenRepository } from '../interface/find-token-by-token-repository-interface';
import { SignInResponseModel } from '../interface/sign-in-response-model-interface';

export class RefreshToken {
constructor(
    private readonly createTokenRepository: CreateTokenRepository,
    private readonly findByTokenRepository: FindTokenByTokenRepository,
    private readonly jwtAdapter: JwtToken,
) {}

async refresh(refreshToken: string): Promise<SignInResponseModel> | never {
    if (!refreshToken) {
    throw new RequestValidationError('Empty refreshToken');
    }

    try {
    const userId = this.jwtAdapter.verify(refreshToken, false);
    const foundToken = await this.findByTokenRepository.findByToken(refreshToken);

    if (!foundToken) {
        throw new UnauthorizedError();
    }

    const accessTokenData = this.jwtAdapter.signAccessToken(userId);
    const refreshTokenData = this.jwtAdapter.signRefreshToken(userId);

    await this.createTokenRepository.create({
        token: refreshTokenData.token,
        user_id: userId,
        expires_in: formatDateTime(refreshTokenData.expirationDate),
    });

    return {
        token: accessTokenData.token,
        refreshToken: refreshTokenData.token,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (tokenError: any) {
    const error = new UnauthorizedError('Invalid refresh token');
    error.stack = tokenError.stack;
    throw error;
    }
}
}
