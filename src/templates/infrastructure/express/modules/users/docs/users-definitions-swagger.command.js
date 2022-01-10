module.exports = {
    get: function (resource) {
      return `/* eslint-disable @typescript-eslint/no-explicit-any */
import { create_user_path, create_user_definition } from './create-user-definitions-swagger';
import { find_user_by_id_path, find_user_by_id_definitions } from './find-user-by-id-definitions-swagger';
import { find_all_users_path, find_all_users_definitions } from './find-all-users-definitions-swagger';
import { update_user_path, update_user_definitions } from './update-user-definitions-swagger';
import { delete_user_by_id_path, delete_user_by_id_definitions } from './delete-user-by-id-definitions-swagger';

export const usersPath = {
'/users/{id}': {
    delete: delete_user_by_id_path,
    get: find_user_by_id_path,
    put: update_user_path,
},
'/users': {
    post: create_user_path,
    get: find_all_users_path,
},
};

export const usersDefinitions = Object.assign(
create_user_definition,
find_user_by_id_definitions,
find_all_users_definitions,
update_user_definitions,
delete_user_by_id_definitions,
);                
`;
    },
  };
  