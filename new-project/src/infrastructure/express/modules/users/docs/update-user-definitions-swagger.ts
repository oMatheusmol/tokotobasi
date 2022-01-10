const update_user_path = {
tags: ['Users'],
summary: 'Update a user',
consumes: ['application/json'],
produces: ['application/json'],
security: [{ x_api_key: [] }],
parameters: [
    {
    in: 'path',
    name: 'id',
    description: 'Id of the user',
    required: true,
    type: 'string',
    },
    {
    in: 'body',
    name: 'body',
    description: 'Json object to update a user',
    required: true,
    schema: {
        $ref: '#/definitions/update_user_body',
    },
    },
],
responses: {
    200: {
    description: 'Successful operation',
    schema: {
        $ref: '#/definitions/generic_sucess_res',
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

const update_user_definitions = {
update_user_body: {
    type: 'object',
    required: ['email', 'password', 'confirmPassword', 'name'],
    properties: {
    email: {
        type: 'string',
    },
    oldPassword: {
        type: 'string',
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
};

export { update_user_path, update_user_definitions };                 
