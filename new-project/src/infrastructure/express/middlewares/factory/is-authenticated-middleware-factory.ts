import { jwtTokenAdapterSingleton } from '../../../../common/security/jwt-token-adapter';
import { IsAuthenticatedMiddleware } from '../authentication/is-authenticated';

export const isAuthenticatedMiddlewareFactory = () => {
const jwtAdapter = jwtTokenAdapterSingleton;
const isAuthenticatedMiddleware = new IsAuthenticatedMiddleware(jwtAdapter);

return {
    isAuthenticatedMiddleware,
};
};  
