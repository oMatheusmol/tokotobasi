module.exports = {
    get: function (resource) {
      return `import { User } from './user-interface';

export interface FindAllUsersRepository {
find(order: 'asc' | 'desc', limit: number, offset: number): Promise<User[]>;
}       
`;
    },
  };