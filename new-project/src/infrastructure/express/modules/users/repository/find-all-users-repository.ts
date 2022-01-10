import db from '../../../../knex/config/knex.dataBase';
import { User } from '../interface/user-interface';

export class FindAllUsersRepository {
private readonly table = 'users';

public async find(order: 'asc' | 'desc', limit: number, offset: number): Promise<User[]> {
    const users = await db(this.table)
    .select('id', 'name', 'email', 'password_hash')
    .orderBy('id', order)
    .limit(limit)
    .offset(offset);
    return users;
}
} 
