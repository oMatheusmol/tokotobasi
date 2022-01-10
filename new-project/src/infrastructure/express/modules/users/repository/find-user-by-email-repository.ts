import db from '../../../../knex/config/knex.dataBase';
import { User } from '../interface/user-interface';

export class FindUserByEmailRepository {
public async findByEmail(email: string): Promise<User | null> {
    const table = 'users';
    const user = await db<User>(table).where({ email }).first();
    if (!user) return null;
    return { ...user, id: user.id.toString() };
}
}    
