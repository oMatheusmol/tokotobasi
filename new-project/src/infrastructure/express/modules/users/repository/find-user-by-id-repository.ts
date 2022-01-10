import db from '../../../../knex/config/knex.dataBase';
import { User } from '../interface/user-interface';

export class FindUserByIdRepository {
private readonly table = 'users';

public async findById(id: string): Promise<User | null> {
    const user = await db<User>(this.table).where({ id }).first();
    if (!user) return null;
    return { ...user, id: user.id.toString() };
}
}    
