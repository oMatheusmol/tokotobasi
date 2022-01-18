 import { create_client_path, create_client_definition } from './create-client-definitions-swagger';
import { find_all_clients_path, find_all_clients_definitions } from './find-all-clients-definitions-swagger';
import { find_client_by_id_path, find_client_by_id_definitions } from './find-client-by-id-definitions-swagger';
import { update_client_path, update_client_definitions } from './update-client-definitions-swagger';
import {
  delete_client_by_id_path,
  delete_client_by_id_definitions,
} from './delete-client-by-id-definitions-swagger';

export const clientsPath = {
  '/clients/{id}': {
    delete: delete_client_by_id_path,
    get: find_client_by_id_path,
    put: update_client_path,
  },
  '/clients': {
    post: create_client_path,
    get: find_all_clients_path,
  },
};

export const clientsDefinitions = Object.assign(
  create_client_definition,
  find_all_clients_definitions,
  find_client_by_id_definitions,
  delete_client_by_id_definitions,
  update_client_definitions,
); 
