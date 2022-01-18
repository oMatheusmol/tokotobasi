const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `const delete_`+resourceLower+`_by_id_path = {
    tags: ['`+resourceUpper+`s'],
    summary: 'Delete a `+resourceLower+` by id',
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
    
const delete_`+resourceLower+`_by_id_definitions = {};
    
export { delete_`+resourceLower+`_by_id_path, delete_`+resourceLower+`_by_id_definitions };      
`;
    },
  };
  