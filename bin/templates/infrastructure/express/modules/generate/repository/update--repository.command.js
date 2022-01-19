const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `/* eslint-disable @typescript-eslint/no-explicit-any */
import { RepositoryError } from '../../../../../common/errors/repository-error';
import db from '../../../../knex/config/knex.dataBase';
import { Update`+resourceUpper+`BodyRequest } from '../interface/update-`+resourceLower+`-body-request';

export class Update`+resourceUpper+`ByIdRepository {
  private readonly table = '`+resourceLower+`s';

  public async update(id: string, requestModel: Update`+resourceUpper+`BodyRequest): Promise<number | never> {
    try {
      const updated = await db(this.table)
        .update({ ...requestModel, updated_at: new Date() })
        .where({ id });
      return updated;
    } catch (error: any) {
      const repositoryError = new RepositoryError('Could not update `+resourceUpper+`');
      repositoryError.stack = error.stack;
      throw repositoryError;
    }
  }
}
`;
    },
  };
  