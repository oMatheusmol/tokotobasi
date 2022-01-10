const delete_user_by_id_path = {
tags: ['Users'],
summary: 'Delete a user by id',
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

const delete_user_by_id_definitions = {};

export { delete_user_by_id_path, delete_user_by_id_definitions };           
