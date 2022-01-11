module.exports = {
    get: function (resource) {
      return `import { FindAllUsersRequestModel } from '../validation/find-all-users-validation';
import { User } from './user-interface';

export interface FindAllUsersUseCase {
findAll(request?: FindAllUsersRequestModel): Promise<User[]> | never;
}    
`;
    },
  };