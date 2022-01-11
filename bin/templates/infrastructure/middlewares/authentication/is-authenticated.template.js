module.exports = {
    get: function (resource) {
      return `/* eslint-disable @typescript-eslint/no-explicit-any */
import { UnauthorizedError } from '../../../../common/errors/unauthorized-error';
import { objectKeyExists } from '../../../../common/helpers/object-key-exists';
import { JwtTokenAdapter } from '../../../../common/security/jwt-token-adapter';
import { Middleware, MiddlewareRequestModel } from '../../adapters/express-middleware-adapter';

export class IsAuthenticatedMiddleware implements Middleware {
constructor(private readonly jwtTokenAdapter: JwtTokenAdapter) {}

async handleRequest(request: MiddlewareRequestModel): Promise<void> | never {
    if (!objectKeyExists(request, 'headers') || !objectKeyExists(request.headers, 'x-api-key')) {
    throw new UnauthorizedError('Invalid request');
    }

    const token = request.headers['x-api-key'];

    try {
    const userId = this.jwtTokenAdapter.verify(token);
    request.headers.userId = userId;
    } catch (error: any) {
    const unauthorizedError = new UnauthorizedError(error.message);
    unauthorizedError.stack = error.stack;
    throw unauthorizedError;
    }
}
}
`;
    },
  };
  