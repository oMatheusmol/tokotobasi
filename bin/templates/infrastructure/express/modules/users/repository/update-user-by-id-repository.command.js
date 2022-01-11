module.exports = {
    get: function (resource) {
      return `/* eslint-disable @typescript-eslint/no-explicit-any */
import { RepositoryError } from '../../../../../common/errors/repository-error';
import db from '../../../../knex/config/knex.dataBase';
import { UpdateUserBodyRepository } from '../interface/update-user-body-repository';

export class UpdateUserByIdRepository {
private readonly table = 'users';

public async update(id: string, requestModel: UpdateUserBodyRepository): Promise<number | never> {
    try {
    const updated = await db(this.table)
        .update({ ...requestModel, updated_at: new Date() })
        .where({ id });
    return updated;
    } catch (error: any) {
    const repositoryError = new RepositoryError('Could not update User');
    repositoryError.stack = error.stack;
    throw repositoryError;
    }
}
} 
`;
    },
  };
  