module.exports = {
    get: function (resource) {
      return `/* eslint-disable @typescript-eslint/no-explicit-any */
import { RepositoryError } from '../../../../../common/errors/repository-error';
import db from '../../../../knex/config/knex.dataBase';
import { CreateUser } from '../interface/create-user';
import { User } from '../interface/user-interface';

export class CreateUserRepository {
public async create(requestModel: CreateUser): Promise<User | never> {
    const table = 'users';
    try {
    const user = await db<User>(table).insert(requestModel).returning('id');
    return {
        id: user[0].toString(),
        email: requestModel.email,
        name: requestModel.name,
        password_hash: requestModel.password_hash,
    };
    } catch (error: any) {
    const repositoryError = new RepositoryError('Could not create User');
    repositoryError.stack = error.stack;
    throw repositoryError;
    }
}
}     
`;
    },
  };
  