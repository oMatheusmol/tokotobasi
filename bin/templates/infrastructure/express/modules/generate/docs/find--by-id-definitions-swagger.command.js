const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return ` const find_`+resourceLower+`_by_id_path = {
    tags: ['`+resourceUpper+`s'],
    summary: 'Find a `+resourceLower+` by id',
    consumes: ['application/json'],
    produces: ['application/json'],
    security: [{ x_api_key: [] }],
    parameters: [
        {
            in: 'path',
            name: 'id',
            description: 'Id of the `+resourceLower+`',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        200: {
            description: 'Successful operation',
            schema: {
                $ref: '#/definitions/find_`+resourceLower+`_by_id_res',
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
    
const find_`+resourceLower+`_by_id_definitions = {
    find_`+resourceLower+`_by_id_res: {
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
};
      
export { find_`+resourceLower+`_by_id_path, find_`+resourceLower+`_by_id_definitions };            
`;
    },
  };
  