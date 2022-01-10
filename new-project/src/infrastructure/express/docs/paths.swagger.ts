import { usersPath } from '../modules/users/docs/users-definitions.swagger';
import { authPath } from '../modules/auth/docs/auth-definitions.swagger';

const paths = {
  ...authPath,
  ...usersPath,
};

export { paths };
