module.exports = {
    get: function (resource) {
      return `import { User } from './user-interface';

export interface CreateUserUseCase {
  create(userData: unknown): Promise<User> | never;
}
`;
    },
  };
  