import { Router } from 'express';

import { isAuthenticatedMiddlewareFactory } from '../../../middlewares/factory/is-authenticated-middleware-factory';
import { loggedUserIsTargetBankMiddlewareFactory } from '../middleware/logged-user-is-target-bank-middleware-factory';
import { expressRouteAdapter } from '../../../adapters/express-route-adapter';
import { expressMiddlewareAdapter } from '../../../adapters/express-middleware-adapter';

import { createClientControllerFactory } from '../factory/create-client-controller-factory';
import { findAllClientsControllerFactory } from '../../clients/factory/find-all-clients-controller-factory';
import { findClientByIdControllerFactory } from '../../clients/factory/find-client-by-id-controller-factory';
import { updateClientControllerFactory } from '../../clients/factory/update-client-controller-factory';
import { deleteClientByIdControllerFactory } from '../../clients/factory/delete-client-by-id-controller-factory';

//Clients router
export const clientRoutes = Router();

//Middleware[]
const { isAuthenticatedMiddleware } = isAuthenticatedMiddlewareFactory();
const { loggedUserIsTargetBankMiddleware } = loggedUserIsTargetBankMiddlewareFactory();

// Controllers
const { createClientController } = createClientControllerFactory();
const { findAllClientsController } = findAllClientsControllerFactory();
const { findClientByIdController } = findClientByIdControllerFactory();
const { updateClientController } = updateClientControllerFactory();
const { deleteClientByIdController } = deleteClientByIdControllerFactory();

// Routes
clientRoutes.post(
  '/',
  expressMiddlewareAdapter(isAuthenticatedMiddleware),
  expressMiddlewareAdapter(loggedUserIsTargetBankMiddleware),
  expressRouteAdapter(createClientController),
);

clientRoutes.get(
  '/',
  expressMiddlewareAdapter(isAuthenticatedMiddleware),
  expressMiddlewareAdapter(loggedUserIsTargetBankMiddleware),
  expressRouteAdapter(findAllClientsController),
);

clientRoutes.get(
  '/:id',
  expressMiddlewareAdapter(isAuthenticatedMiddleware),
  expressMiddlewareAdapter(loggedUserIsTargetBankMiddleware),
  expressRouteAdapter(findClientByIdController),
);

clientRoutes.put(
  '/:id',
  expressMiddlewareAdapter(isAuthenticatedMiddleware),
  expressMiddlewareAdapter(loggedUserIsTargetBankMiddleware),
  expressRouteAdapter(updateClientController),
);

clientRoutes.delete(
  '/:id',
  expressMiddlewareAdapter(isAuthenticatedMiddleware),
  expressMiddlewareAdapter(loggedUserIsTargetBankMiddleware),
  expressRouteAdapter(deleteClientByIdController),
);

