const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return ` 
      const update_`+resourceLower+`_path = {
        tags: ['`+resourceUpper+`s'],
        summary: 'Update a `+resourceLower+`',
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
          {
            in: 'body',
            name: 'body',
            description: 'Json object to update a `+resourceLower+`',
            required: true,
            schema: {
              $ref: '#/definitions/update_`+resourceLower+`_body',
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
      
const update_`+resourceLower+`_definitions = {
    update_`+resourceLower+`_body: {
        type: 'object',
        required: ['name'],
        properties: {
            name: {
              type: 'string',
            },
        },
    },
};
      
export { update_`+resourceLower+`_path, update_`+resourceLower+`_definitions };      
`;
    },
  };
  