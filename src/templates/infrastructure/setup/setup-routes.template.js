module.exports = {
    get: function (resource) {
      return `import { Application } from 'express';
import { rateLimiter } from '../middlewares/rate-limit';

import { userRoutes } from '../modules/users/router/user-route';  
import { authRoutes } from '../modules/auth/router/auth-route';


export const setupRoutes = (app: Application): void => {
app.use('/api/v1/users', rateLimiter, userRoutes);
app.use('/api/v1/auth', rateLimiter, authRoutes);
};            
`;
    },
  };
  