module.exports = {
    get: function (resource) {
      return `/* eslint-disable @typescript-eslint/no-explicit-any */
import { RepositoryError } from '../../../../../common/errors/repository-error';
import db from '../../../../knex/config/knex.dataBase';
import { Token } from '../interface/token-interface';
import { TokenRequestModel } from '../interface/token-request-model-interface';

export class CreateTokenRepository {
private readonly table = 'tokens';

async create(tokenModel: TokenRequestModel): Promise<Token> | never {
    if (!tokenModel || !tokenModel.user_id || !tokenModel.token) {
    throw new RepositoryError('Cannot create token without the values');
    }

    try {
    const token = await db.transaction(async trx => {
        await trx<Token>('tokens').delete().where({ user_id: tokenModel.user_id });
        const token = await trx<Token>(this.table).insert(tokenModel).returning('id');
        return token;
    });

    return {
        ...tokenModel,
        id: token[0].toString(),
    };
    } catch (error: any) {
    const repositoryError = new RepositoryError('Could not create token');
    repositoryError.stack = error.stack;
    throw repositoryError;
    }
}
}
`;
    },
  };
  