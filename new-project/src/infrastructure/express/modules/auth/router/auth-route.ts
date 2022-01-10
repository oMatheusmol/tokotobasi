import { Router } from 'express';
import { signInControllerFactory } from '../factory/sign-in-controller-factory';
import { refreshUserControllerFactory } from '../factory/refresh-user-controller-factory';
import { expressRouteAdapter } from '../../../adapters/express-route-adapter';

export const authRoutes = Router();

const { signInController } = signInControllerFactory();
const { refreshTokenController } = refreshUserControllerFactory();

authRoutes.post('/sign-in', expressRouteAdapter(signInController));

authRoutes.post('/refresh-token', expressRouteAdapter(refreshTokenController));
