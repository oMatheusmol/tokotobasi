const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `const create_`+resourceLower+`_path = {
    tags: ['`+resourceUpper+`s'],
    summary: 'Create a new  `+resourceLower+`',
    consumes: ['application/json'],
    produces: ['application/json'],
    security: [{ x_api_key: [] }],
    parameters: [
        {
            in: 'body',
            name: 'body',
            description: 'Json object to create a new `+resourceLower+`',
            required: true,
            schema: {
                $ref: '#/definitions/create_`+resourceLower+`_body',
            },
        },
    ],
    responses: {
        200: {
            description: 'Successful operation',
            schema: {
                $ref: '#/definitions/create_`+resourceLower+`_res',
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
    
const create_`+resourceLower+`_definition = {
    create_`+resourceLower+`_body: {
        type: 'object',
        required: ['name'],
        properties: {
            name: {
                type: 'string',
            },
        },
    create_`+resourceLower+`_res: {
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
    
export { create_`+resourceLower+`_path, create_`+resourceLower+`_definition };      
`;
    },
  };
  