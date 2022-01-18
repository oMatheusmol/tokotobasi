const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `const find_all_`+resourceLower+`s_path = {
        tags: ['`+resourceUpper+`s'],
    summary: 'Find all `+resourceLower+`s',
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
                $ref: '#/definitions/find_all_`+resourceLower+`s_res',
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
      
const find_all_`+resourceLower+`s_definitions = {
    find_all_`+resourceLower+`s_res: {
        type: 'array',
        items: {
        $ref: '#/definitions/find_`+resourceLower+`_by_id_res',
        },
    },
};
      
export { find_all_`+resourceLower+`s_path, find_all_`+resourceLower+`s_definitions };      
`;
    },
  };
  