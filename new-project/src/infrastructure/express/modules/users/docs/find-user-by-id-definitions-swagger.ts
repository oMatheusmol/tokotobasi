const find_user_by_id_path = {
tags: ['Users'],
summary: 'Find a user by id',
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
],
responses: {
    200: {
    description: 'Successful operation',
    schema: {
        $ref: '#/definitions/find_user_by_id_res',
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

const find_user_by_id_definitions = {
find_user_by_id_res: {
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

export { find_user_by_id_path, find_user_by_id_definitions };                 
