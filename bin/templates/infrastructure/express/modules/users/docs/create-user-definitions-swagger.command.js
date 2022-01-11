module.exports = {
    get: function (resource) {
      return `const create_user_path = {
tags: ['Users'],
summary: 'Create a new user',
consumes: ['application/json'],
produces: ['application/json'],
security: [{ x_api_key: [] }],
parameters: [
    {
    in: 'body',
    name: 'body',
    description: 'Json object to create a new user',
    required: true,
    schema: {
        $ref: '#/definitions/create_user_body',
    },
    },
],
responses: {
    200: {
    description: 'Successful operation',
    schema: {
        $ref: '#/definitions/create_user_res',
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

const create_user_definition = {
create_user_body: {
    type: 'object',
    required: ['email', 'password', 'confirmPassword', 'name'],
    properties: {
    email: {
        type: 'string',
        format: 'email',
    },
    password: {
        type: 'string',
    },
    confirmPassword: {
        type: 'string',
    },
    name: {
        type: 'string',
    },
    },
},
create_user_res: {
    type: 'object',
    properties: {
    id: {
        type: 'string',
    },
    email: {
        type: 'string',
        format: 'email',
    },
    name: {
        type: 'string',
    },
    password_hash: {
        type: 'string',
    },
    },
},
};

export { create_user_path, create_user_definition };           
`;
    },
  };
  