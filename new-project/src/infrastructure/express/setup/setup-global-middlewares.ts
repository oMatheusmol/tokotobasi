import { Application, json } from 'express';
import helmet from 'helmet';
import swaggerTools from 'swagger-tools';
import swaggerUiExpress from 'swagger-ui-express';
import { swagger } from '../docs/docs.swagger';

export const setupGlobalMiddlewares = (app: Application): void => {
  app.use(helmet());
  app.use(json());
  swaggerTools.initializeMiddleware(swagger, middleware => {
    app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swagger));
    app.use(middleware.swaggerMetadata());
    app.use(middleware.swaggerValidator());
    app.use(middleware.swaggerUi());
  });
};            
