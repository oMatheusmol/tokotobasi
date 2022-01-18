const pluralize = require('pluralize');
const utils = require('../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { LoggedUserIsTarget`+resourceUpper+`Middleware } from '../authentication/logged-user-is-target-`+resourceLower+`';
import { FindOneUserWithRolesRepository } from '../../../middlewares/repository/find-one-with-roles-repository';

export const loggedUserIsTarget`+resourceUpper+`MiddlewareFactory = () => {
  const findOneUserWithRoles = new FindOneUserWithRolesRepository();
  const loggedUserIsTarget`+resourceUpper+`Middleware = new LoggedUserIsTarget`+resourceUpper+`Middleware(findOneUserWithRoles);

  return {
    loggedUserIsTarget`+resourceUpper+`Middleware,
  };
};
`;
    },
  };
  