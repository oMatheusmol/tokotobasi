module.exports = {
    get: function (resource) {
      return `import { InternalServerError } from '../../../../../common/errors/internal-server-error';
import { NotFoundError } from '../../../../../common/errors/not-found-error';
import { UnauthorizedError } from '../../../../../common/errors/unauthorized-error';
import { JwtToken, SignedToken } from '../../../../../common/security/jwt-token';
import { PasswordHashing } from '../../../../../common/utils/bcrypt-adapter';
import { formatDateTime } from '../../../../../common/utils/format-date-time';
import { ValidationComposite } from '../../../../../common/validation/validation-composite';
import { FindUserByEmailRepository } from '../../users/interface/find-user-by-email-repository';
import { User } from '../../users/interface/user-interface';
import { CreateTokenRepository } from '../interface/create-token-repository-interface';
import { SignInRequestModel } from '../interface/sign-in-request-model-interface';
import { SignInResponseModel } from '../interface/sign-in-response-model-interface';

type SaveFreshTokenParams = {
refreshTokenData: SignedToken;
user: User;
};

export class SignIn {
constructor(
    private readonly findUserByEmailRepository: FindUserByEmailRepository,
    private readonly passwordHashing: PasswordHashing,
    private readonly jwtToken: JwtToken,
    private readonly createTokenRepository: CreateTokenRepository,
    private readonly validation?: ValidationComposite<SignInRequestModel>,
) {}

async verify(signInModel: SignInRequestModel): Promise<SignInResponseModel> | never {
    await this.runValidation(signInModel);
    const user = await this.findUserByEmail(signInModel);
    await this.checkPassword(user, signInModel);

    const accessTokenData = this.jwtToken.signAccessToken(user.id);
    const refreshTokenData = this.jwtToken.signRefreshToken(user.id);

    await this.saveRefreshToken({ refreshTokenData, user });

    return {
    token: accessTokenData.token,
    refreshToken: refreshTokenData.token,
    };
}

private async saveRefreshToken({ refreshTokenData, user }: SaveFreshTokenParams) {
    await this.createTokenRepository.create({
    token: refreshTokenData.token,
    user_id: user.id,
    expires_in: formatDateTime(refreshTokenData.expirationDate),
    });
}

private async runValidation(signInModel: SignInRequestModel) {
    if (this.validation) {
    await this.validation.validate(signInModel);
    }
}

private async findUserByEmail(signInModel: SignInRequestModel): Promise<User | never> {
    const user = await this.findUserByEmailRepository.findByEmail(signInModel.email);

    if (!user) {
    throw new NotFoundError('User not found');
    }

    return user;
}

private async checkPassword(user: User, signInModel: SignInRequestModel): Promise<void | never> {
    if (!user.password_hash) {
    throw new InternalServerError('User has no password');
    }

    const isPasswordCorrect = await this.passwordHashing.compare(signInModel.password, user.password_hash);

    if (!isPasswordCorrect) {
    throw new UnauthorizedError('Invalid credentials');
    }
}
}
`;
    },
  };
  