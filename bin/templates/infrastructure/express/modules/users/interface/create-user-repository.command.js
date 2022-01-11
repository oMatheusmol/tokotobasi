module.exports = {
    get: function (resource) {
      return `import { CreateUser } from './create-user';
import { User } from './user-interface';

export interface CreateUserRepository {
  create(requestModel: CreateUser): Promise<User | never>;
}

`;
    },
  };
  