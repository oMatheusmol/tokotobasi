import db from '../../../../knex/config/knex.dataBase';
import { User } from '../interface/user-interface';

export class DeleteUserByIdRepository {
private readonly table = 'users';

async deleteById(id: string): Promise<number> {
    const deleted = await db<User>(this.table).delete().where({ id });
    return deleted;
}
}    
