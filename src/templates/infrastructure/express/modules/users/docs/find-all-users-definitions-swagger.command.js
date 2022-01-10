module.exports = {
    get: function (resource) {
      return `const find_all_users_path = {
tags: ['Users'],
summary: 'Find all users',
consumes: ['application/json'],
produces: ['application/json'],
security: [{ x_api_key: [] }],
parameters: [
    {
    in: 'query',
    name: 'order',
    description: 'Order of the users',
    required: false,
    type: 'string',
    enum: ['asc', 'desc'],
    },
    {
    in: 'query',
    name: 'limit',
    description: 'Limit of the users',
    required: false,
    type: 'integer',
    format: 'int32',
    },
    {
    in: 'query',
    name: 'offset',
    description: 'Offset of the users',
    required: false,
    type: 'integer',
    format: 'int32',
    },
],
responses: {
    200: {
    description: 'Successful operation',
    schema: {
        $ref: '#/definitions/find_all_users_res',
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

const find_all_users_definitions = {
find_all_users_res: {
    type: 'array',
    items: {
    $ref: '#/definitions/find_user_by_id_res',
    },
},
};

export { find_all_users_path, find_all_users_definitions };                
`;
    },
  };
  