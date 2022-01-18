 
      const update_client_path = {
        tags: ['Clients'],
        summary: 'Update a client',
        consumes: ['application/json'],
        produces: ['application/json'],
        security: [{ x_api_key: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            description: 'Id of the client',
            required: true,
            type: 'string',
          },
          {
            in: 'body',
            name: 'body',
            description: 'Json object to update a client',
            required: true,
            schema: {
              $ref: '#/definitions/update_client_body',
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
      
const update_client_definitions = {
    update_client_body: {
        type: 'object',
        required: ['name'],
        properties: {
            name: {
              type: 'string',
            },
        },
    },
};
      
export { update_client_path, update_client_definitions };      
