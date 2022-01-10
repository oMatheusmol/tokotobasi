import { UnauthorizedError } from '../../../../../common/errors/unauthorized-error';
import { Middleware, MiddlewareRequestModel } from '../../../adapters/express-middleware-adapter';
import { FindOneUserWithRoles } from '../../../middlewares/interface/find-user-with-roles-repository-interface';

export class LoggedUserIsTargetUserMiddleware implements Middleware {
constructor(private readonly findOneUserWithRoles: FindOneUserWithRoles) {}

async handleRequest(request: MiddlewareRequestModel): Promise<void> | never {
    if (!request || !request.headers || !request.headers.userId) {
    throw new UnauthorizedError('Not allowed');
    }

    const loggedUserId = `${request.headers.userId}`;

    const foundUser = await this.findOneUserWithRoles.findOneWithRoles(loggedUserId);

    if (!foundUser) {
    throw new UnauthorizedError('Not allowed');
    }

    if (foundUser.roles) {
    const isAdmin = foundUser.roles.find(role => role.name === 'Root');
    if (!isAdmin) throw new UnauthorizedError('Not allowed');
    return;
    }

    if (!request.params || !request.params.id) {
    throw new UnauthorizedError('Not allowed');
    }

    const targetUserId = `${foundUser.id}`;

    if (loggedUserId !== targetUserId) {
    throw new UnauthorizedError('You are not allowed to manipulate target user');
    }
}
}            
