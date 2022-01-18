const pluralize = require('pluralize');
const utils = require('../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { Router } from 'express';

import { isAuthenticatedMiddlewareFactory } from '../../../middlewares/factory/is-authenticated-middleware-factory';
import { loggedUserIsTargetBankMiddlewareFactory } from '../middleware/logged-user-is-target-bank-middleware-factory';
import { expressRouteAdapter } from '../../../adapters/express-route-adapter';
import { expressMiddlewareAdapter } from '../../../adapters/express-middleware-adapter';

import { create`+resourceUpper+`ControllerFactory } from '../factory/create-`+resourceLower+`-controller-factory';
import { findAll`+resourceUpper+`sControllerFactory } from '../../`+resourceLower+`s/factory/find-all-`+resourceLower+`s-controller-factory';
import { find`+resourceUpper+`ByIdControllerFactory } from '../../`+resourceLower+`s/factory/find-`+resourceLower+`-by-id-controller-factory';
import { update`+resourceUpper+`ControllerFactory } from '../../`+resourceLower+`s/factory/update-`+resourceLower+`-controller-factory';
import { delete`+resourceUpper+`ByIdControllerFactory } from '../../`+resourceLower+`s/factory/delete-`+resourceLower+`-by-id-controller-factory';

//`+resourceUpper+`s router
export const `+resourceLower+`Routes = Router();

//Middlewares
const { isAuthenticatedMiddleware } = isAuthenticatedMiddlewareFactory();
const { loggedUserIsTargetBankMiddleware } = loggedUserIsTargetBankMiddlewareFactory();

// Controllers
const { create`+resourceUpper+`Controller } = create`+resourceUpper+`ControllerFactory();
const { findAll`+resourceUpper+`sController } = findAll`+resourceUpper+`sControllerFactory();
const { find`+resourceUpper+`ByIdController } = find`+resourceUpper+`ByIdControllerFactory();
const { update`+resourceUpper+`Controller } = update`+resourceUpper+`ControllerFactory();
const { delete`+resourceUpper+`ByIdController } = delete`+resourceUpper+`ByIdControllerFactory();

// Routes
`+resourceLower+`Routes.post(
  '/',
  expressMiddlewareAdapter(isAuthenticatedMiddleware),
  expressMiddlewareAdapter(loggedUserIsTargetBankMiddleware),
  expressRouteAdapter(create`+resourceUpper+`Controller),
);

`+resourceLower+`Routes.get(
  '/',
  expressMiddlewareAdapter(isAuthenticatedMiddleware),
  expressMiddlewareAdapter(loggedUserIsTargetBankMiddleware),
  expressRouteAdapter(findAll`+resourceUpper+`sController),
);

`+resourceLower+`Routes.get(
  '/:id',
  expressMiddlewareAdapter(isAuthenticatedMiddleware),
  expressMiddlewareAdapter(loggedUserIsTargetBankMiddleware),
  expressRouteAdapter(find`+resourceUpper+`ByIdController),
);

`+resourceLower+`Routes.put(
  '/:id',
  expressMiddlewareAdapter(isAuthenticatedMiddleware),
  expressMiddlewareAdapter(loggedUserIsTargetBankMiddleware),
  expressRouteAdapter(update`+resourceUpper+`Controller),
);

`+resourceLower+`Routes.delete(
  '/:id',
  expressMiddlewareAdapter(isAuthenticatedMiddleware),
  expressMiddlewareAdapter(loggedUserIsTargetBankMiddleware),
  expressRouteAdapter(delete`+resourceUpper+`ByIdController),
);
`;
    },
  };
  