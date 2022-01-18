const create_client_path = {
    tags: ['Clients'],
    summary: 'Create a new  client',
    consumes: ['application/json'],
    produces: ['application/json'],
    security: [{ x_api_key: [] }],
    parameters: [
        {
            in: 'body',
            name: 'body',
            description: 'Json object to create a new client',
            required: true,
            schema: {
                $ref: '#/definitions/create_client_body',
            },
        },
    ],
    responses: {
        200: {
            description: 'Successful operation',
            schema: {
                $ref: '#/definitions/create_client_res',
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
    
const create_client_definition = {
    create_client_body: {
        type: 'object',
        required: ['name'],
        properties: {
            name: {
                type: 'string',
            },
        },
    create_client_res: {
        type: 'object',
        properties: {
            id: {
                type: 'string',
            },
            name: {
                type: 'string',
            },
            },
        },
    },
};
    
export { create_client_path, create_client_definition };      
