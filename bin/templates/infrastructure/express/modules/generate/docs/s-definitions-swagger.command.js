const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return ` import { create_`+resourceLower+`_path, create_`+resourceLower+`_definition } from './create-`+resourceLower+`-definitions-swagger';
import { find_all_`+resourceLower+`s_path, find_all_`+resourceLower+`s_definitions } from './find-all-`+resourceLower+`s-definitions-swagger';
import { find_`+resourceLower+`_by_id_path, find_`+resourceLower+`_by_id_definitions } from './find-`+resourceLower+`-by-id-definitions-swagger';
import { update_`+resourceLower+`_path, update_`+resourceLower+`_definitions } from './update-`+resourceLower+`-definitions-swagger';
import {
  delete_`+resourceLower+`_by_id_path,
  delete_`+resourceLower+`_by_id_definitions,
} from './delete-`+resourceLower+`-by-id-definitions-swagger';

export const `+resourceLower+`sPath = {
  '/`+resourceLower+`s/{id}': {
    delete: delete_`+resourceLower+`_by_id_path,
    get: find_`+resourceLower+`_by_id_path,
    put: update_`+resourceLower+`_path,
  },
  '/`+resourceLower+`s': {
    post: create_`+resourceLower+`_path,
    get: find_all_`+resourceLower+`s_path,
  },
};

export const `+resourceLower+`sDefinitions = Object.assign(
  create_`+resourceLower+`_definition,
  find_all_`+resourceLower+`s_definitions,
  find_`+resourceLower+`_by_id_definitions,
  delete_`+resourceLower+`_by_id_definitions,
  update_`+resourceLower+`_definitions,
); 
`;
    },
  };
  