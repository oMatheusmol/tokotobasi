import { LoggedUserIsTargetClientMiddleware } from '../authentication/logged-user-is-target-client';
import { FindOneUserWithRolesRepository } from '../../../middlewares/repository/find-one-with-roles-repository';

export const loggedUserIsTargetClientMiddlewareFactory = () => {
  const findOneUserWithRoles = new FindOneUserWithRolesRepository();
  const loggedUserIsTargetClientMiddleware = new LoggedUserIsTargetClientMiddleware(findOneUserWithRoles);

  return {
    loggedUserIsTargetClientMiddleware,
  };
};
