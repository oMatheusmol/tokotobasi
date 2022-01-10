import { Router } from 'express';

import { isAuthenticatedMiddlewareFactory } from '../../../middlewares/factory/is-authenticated-middleware-factory';
import { loggedUserIdTargetUserMiddlewareFactory } from '../middleware/logged-user-id-target-user-middleware-factory';
import { expressRouteAdapter } from '../../../adapters/express-route-adapter';
import { expressMiddlewareAdapter } from '../../../adapters/express-middleware-adapter';

import { findUserByIdControllerFactory } from '../factory/find-user-by-id-controller-factory';
import { createUserControllerFactory } from '../factory/create-user-controller-factory';
import { updateUserControllerFactory } from '../factory/update-user-controller-factory';
import { findAllUsersControllerFactory } from '../factory/find-all-users-controller-factory';
import { deleteUserByIdControllerFactory } from '../factory/delete-user-controller-factory';

//User router
export const userRoutes = Router();

//Middleware
const { isAuthenticatedMiddleware } = isAuthenticatedMiddlewareFactory();
const { loggedUserIsTargetUserMiddleware } = loggedUserIdTargetUserMiddlewareFactory();

// Controllers
const { createUserController } = createUserControllerFactory();
const { findUserByIdController } = findUserByIdControllerFactory();
const { findAllUsersController } = findAllUsersControllerFactory();
const { updateUserController } = updateUserControllerFactory();
const { deleteUserByIdController } = deleteUserByIdControllerFactory();

// Routes
userRoutes.post(
'/',
expressMiddlewareAdapter(isAuthenticatedMiddleware),
expressMiddlewareAdapter(loggedUserIsTargetUserMiddleware),
expressRouteAdapter(createUserController),
);

userRoutes.get(
'/:id',
expressMiddlewareAdapter(isAuthenticatedMiddleware),
expressMiddlewareAdapter(loggedUserIsTargetUserMiddleware),
expressRouteAdapter(findUserByIdController),
);

userRoutes.get(
'/',
expressMiddlewareAdapter(isAuthenticatedMiddleware),
expressMiddlewareAdapter(loggedUserIsTargetUserMiddleware),
expressRouteAdapter(findAllUsersController),
);

userRoutes.put(
'/:id',
expressMiddlewareAdapter(isAuthenticatedMiddleware),
expressMiddlewareAdapter(loggedUserIsTargetUserMiddleware),
expressRouteAdapter(updateUserController),
);

userRoutes.delete(
'/:id',
expressMiddlewareAdapter(isAuthenticatedMiddleware),
expressMiddlewareAdapter(loggedUserIsTargetUserMiddleware),
expressRouteAdapter(deleteUserByIdController),
);
