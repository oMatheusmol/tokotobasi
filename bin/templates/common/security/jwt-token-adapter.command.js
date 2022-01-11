module.exports = {
    get: function (resource) {
      return `import jwt from 'jsonwebtoken';
import { JwtToken } from './jwt-token';
import { createFutureDate } from '../utils/create-future-date';

export class JwtTokenAdapter implements JwtToken {
  constructor(
    public readonly secret: string,
    public readonly refreshSecret: string,
    public readonly accessTokenExpirationInSeconds = 600000, // 10 minutes default = 600
    public readonly refreshTokenExpirationInSeconds = 691200, // 8 days default
  ) {}

  signAccessToken(userId: string) {
    const expirationDate = createFutureDate(new Date(), parseInt(process.env.JWT_SECRET_EXPIRATION_SECS as string));
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET as string, {
      expiresIn: parseInt(process.env.JWT_SECRET_EXPIRATION_SECS as string),
    });

    return { token, expirationDate };
  }

  signRefreshToken(userId: string) {
    const expirationDate = createFutureDate(
      new Date(),
      parseInt(process.env.JWT_SECRET_REFRESH_EXPIRATION_SECS as string),
    );
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET_REFRESH as string, {
      expiresIn: parseInt(process.env.JWT_SECRET_REFRESH_EXPIRATION_SECS as string),
    });

    return { token, expirationDate };
  }

  verify(token: string, isAccessToken = true) {
    const secret = isAccessToken ? (process.env.JWT_SECRET as string) : (process.env.JWT_SECRET_REFRESH as string);
    const userData = jwt.verify(token, secret) as { id: string };
    return userData.id;
  }
}

const secret = process.env.JWT_SECRET as string;
const refreshSecret = process.env.JWT_SECRET_REFRESH as string;

const secretExpiration = parseInt(process.env.JWT_SECRET_EXPIRATION_SECS as string);
const refreshSecretExpiration = parseInt(process.env.JWT_SECRET_REFRESH_EXPIRATION_SECS as string);

export const jwtTokenAdapterSingleton = new JwtTokenAdapter(
  secret,
  refreshSecret,
  secretExpiration,
  refreshSecretExpiration,
); 
  `;
    },
  };
  