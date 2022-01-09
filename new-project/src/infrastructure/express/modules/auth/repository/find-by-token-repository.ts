import { formatDateTime } from '../../../../../common/utils/format-date-time';
import db from '../../../../knex/config/knex.dataBase';
import { Token } from '../interface/token-interface';

export class FindByTokenRepository {
private readonly table = 'tokens';

async findByToken(token: string): Promise<Token | null> {
    const foundToken = await db<Token>(this.table)
    .select('id', 'token', 'user_id', 'expires_in')
    .where({ token })
    .andWhere('expires_in', '>', formatDateTime(new Date()))
    .orderBy('id', 'desc')
    .first();

    if (!foundToken) return null;

    return {
    id: foundToken.id.toString(),
    token: foundToken.token,
    user_id: foundToken.user_id.toString(),
    expires_in: foundToken.expires_in,
    };
}
}  
