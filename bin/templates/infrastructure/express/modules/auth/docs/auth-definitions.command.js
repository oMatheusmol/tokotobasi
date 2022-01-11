module.exports = {
    get: function (resource) {
      return `import { refresh_token_path, refresh_token_efinition } from './refresh-token-definitions.swagger';
import { create_sign_in_path, create_sign_in_definitions } from './create-sign-in-definitions.swagger';

export const authPath = {
'/auth/refresh-token': {
    post: refresh_token_path,
},
'/auth/sign-in': {
    post: create_sign_in_path,
},
};

export const authDefinitions = Object.assign(create_sign_in_definitions, refresh_token_efinition);  
`;
    },
  };
  