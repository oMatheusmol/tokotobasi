module.exports = {
    get: function (resource) {
      return `import { Role } from './role-interface';
export interface User {
  id: string;
  email: string;
  name: string;
  password_hash: string;
  roles?: Role[];
}
`;
    },
  };