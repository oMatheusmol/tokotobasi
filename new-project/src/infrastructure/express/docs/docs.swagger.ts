// create swagger typescript file

import { definitions } from './definitions.swagger';
import { paths } from './paths.swagger';

const swagger = {
  swagger: '2.0',
  info: {
    title: 'API Demo App Vendas',
    version: '1.0.0',
    description: 'Backend app vendas',
  },
  basePath: '/api/v1',
  produces: ['application/json'],
  securityDefinitions: {
    x_api_key: {
      type: 'apiKey',
      in: 'header',
      name: 'x-api-key',
      description: 'Autenticação firebase',
    },
  },
  paths: paths,
  definitions: definitions,
};

export { swagger };   
