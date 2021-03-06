module.exports = {
    get: function (resource) {
      return `import { User } from './user-interface';

export interface FindUserByEmailRepository {
findByEmail(email: string): Promise<User | null>;
}
`;
    },
  };