const find_all_clients_path = {
        tags: ['Clients'],
    summary: 'Find all clients',
    consumes: ['application/json'],
    produces: ['application/json'],
    security: [{ x_api_key: [] }],
    parameters: [
        {
            in: 'query',
            name: 'order',
            description: 'Order of the results',
            required: false,
            type: 'string',
            enum: ['asc', 'desc'],
        },
        {
            in: 'query',
            name: 'limit',
            description: 'Limit of the results',
            required: false,
            type: 'integer',
            format: 'int32',
        },
        {
            in: 'query',
            name: 'offset',
            description: 'Offset of the results',
            required: false,
            type: 'integer',
            format: 'int32',
        },
    ],
    responses: {
        200: {
            description: 'Successful operation',
            schema: {
                $ref: '#/definitions/find_all_clients_res',
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
      
const find_all_clients_definitions = {
    find_all_clients_res: {
        type: 'array',
        items: {
        $ref: '#/definitions/find_client_by_id_res',
        },
    },
};
      
export { find_all_clients_path, find_all_clients_definitions };      
