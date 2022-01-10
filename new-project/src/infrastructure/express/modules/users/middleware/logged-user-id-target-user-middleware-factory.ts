import { LoggedUserIsTargetUserMiddleware } from '../authentication/logged-user-is-target-user';
import { FindOneUserWithRolesRepository } from '../../../middlewares/repository/find-one-with-roles-repository';

export const loggedUserIdTargetUserMiddlewareFactory = () => {
const findOneUserWithRoles = new FindOneUserWithRolesRepository();
const loggedUserIsTargetUserMiddleware = new LoggedUserIsTargetUserMiddleware(findOneUserWithRoles);

return {
    loggedUserIsTargetUserMiddleware,
    };
};     
