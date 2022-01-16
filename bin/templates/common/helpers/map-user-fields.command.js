module.exports = {
    get: function (resource) {
      return `import { UserWithRoles } from '../../infrastructure/express/middlewares/interface/user-with-roles-interface';
import { User } from '../../infrastructure/express/modules/users/interface/user-interface';

const fixRole = (role: unknown) => {
  if (typeof role === 'number') return role.toString();
  if (typeof role === 'string') return role;
  return '';
};

export const mapUserFields = (users: UserWithRoles[]): User[] => {
  const newUsersMap = new Map<string, User>();

  for (const user of users) {
    const { id, name, email, password_hash } = user;
    const role_id = fixRole(user.role_id);
    const role_name = fixRole(user.role_name);

    if (!newUsersMap.get(user.id)) {
      newUsersMap.set(user.id, {
        id,
        name,
        email,
        password_hash,
        roles: [{ id: role_id, name: role_name }],
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      newUsersMap.get(user.id)!.roles!.push({ id: role_id, name: role_name });
    }
  }

  return [...newUsersMap.values()];
};
  `;
    },
  };
  