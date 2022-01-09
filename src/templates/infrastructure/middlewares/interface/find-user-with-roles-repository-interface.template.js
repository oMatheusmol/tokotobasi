module.exports = {
    get: function (resource) {
      return `import { User } from '../../modules/users/interface/user-interface';

export interface FindOneUserWithRoles {
findOneWithRoles(userId: string): Promise<User | null>;
}      
`;
    },
  };
  