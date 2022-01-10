import { usersDefinitions } from '../modules/users/docs/users-definitions.swagger';
import { authDefinitions } from '../modules/auth/docs/auth-definitions.swagger';

const commonDefinitions = {
  res_error: {
    type: 'object',
    properties: {
      error: {
        type: 'string',
      },
      message: {
        type: 'string',
      },
      statusCode: {
        type: 'number',
      },
      messages: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
  generic_sucess_res: {
    type: 'object',
    properties: {
      message: {
        type: 'string',
      },
    },
  },
};

const definitions = {
  ...commonDefinitions,
  ...authDefinitions,
  ...usersDefinitions,
};

export { definitions };  
