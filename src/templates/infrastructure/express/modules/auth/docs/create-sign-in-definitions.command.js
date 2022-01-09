module.exports = {
    get: function (resource) {
      return `const create_sign_in_path = {
tags: ['Auth'],
summary: 'Create a new token',
consumes: ['application/json'],
produces: ['application/json'],
parameters: [
    {
    in: 'body',
    name: 'body',
    description: 'Json object to create a new user',
    required: true,
    schema: {
        $ref: '#/definitions/create_sign_in_token_body',
    },
    },
],
responses: {
    200: {
    description: 'Successful operation',
    schema: {
        $ref: '#/definitions/create_refresh_token_res',
    },
    },
    400: {
    description: 'RequestValidationError',
    schema: {
        $ref: '#/definitions/res_error',
    },
    },
    401: {
    description: 'UnauthorizedError',
    schema: {
        $ref: '#/definitions/res_error',
    },
    },
    404: {
    description: 'NotFoundError',
    schema: {
        $ref: '#/definitions/res_error',
    },
    },
    409: {
    description: 'ExistsError',
    schema: {
        $ref: '#/definitions/res_error',
    },
    },
    500: {
    description: 'InternalServerError',
    schema: {
        $ref: '#/definitions/res_error',
    },
    },
},
};

const create_sign_in_definitions = {
create_sign_in_token_body: {
    type: 'object',
    required: ['email', 'password'],
    properties: {
    email: {
        type: 'string',
        format: 'email',
    },
    password: {
        type: 'string',
        format: 'password',
    },
    },
},
create_refresh_token_res: {
    type: 'object',
    properties: {
    token: {
        type: 'string',
    },
    refreshToken: {
        type: 'string',
    },
    },
},
};

export { create_sign_in_path, create_sign_in_definitions };     
`;
    },
  };
  