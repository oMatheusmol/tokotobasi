module.exports = {
    get: function (resource) {
      return `import { mapUserFields } from '../../../../common/helpers/map-user-fields';
import db from '../../../knex/config/knex.dataBase';
import { User } from '../../modules/users/interface/user-interface';

export class FindOneUserWithRolesRepository {
private readonly table = 'users';
async findOneWithRoles(id: string): Promise<User | null> {
    const user = await db(`+'`${this.table} as u`'+`)
    .select('u.*', 'r.id as role_id', 'r.name as role_name')
    .leftJoin('user_roles as ur', 'u.id', 'ur.user_id')
    .leftJoin('roles as r', 'r.id', 'ur.role_id')
    .where('u.id', '=', id);
    if (!user || !user.length) return null;
    return mapUserFields(user)[0];
}
}      
`;
    },
  };
  