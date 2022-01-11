module.exports = {
    get: function (resource) {
      return `const refresh_token_path = {
tags: ['Auth'],
summary: 'Create a new refresh token',
consumes: ['application/json'],
produces: ['application/json'],
parameters: [
    {
    in: 'body',
    name: 'body',
    description: 'Json object to create a new user',
    required: true,
    schema: {
        $ref: '#/definitions/create_refresh_token_body',
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

const refresh_token_efinition = {
create_refresh_token_body: {
    type: 'object',
    required: ['token'],
    properties: {
    token: {
        type: 'string',
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

export { refresh_token_path, refresh_token_efinition };          
`;
    },
  };
  