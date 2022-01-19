const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `/* eslint-disable @typescript-eslint/no-explicit-any */
import { RepositoryError } from '../../../../../common/errors/repository-error';
import db from '../../../../knex/config/knex.dataBase';
import { `+resourceUpper+` } from '../interface/`+resourceLower+`-interface';
import { Create`+resourceUpper+`BodyRequest } from '../interface/create-`+resourceLower+`-body-request';

export class Create`+resourceUpper+`Repository {
  private readonly table = '`+resourceLower+`s';
  public async create(requestModel: Create`+resourceUpper+`BodyRequest): Promise<`+resourceUpper+` | never> {
    try {
      const `+resourceLower+` = await db<`+resourceUpper+`>(this.table).insert(requestModel).returning('id');
      return {
        id: `+resourceLower+`[0].toString(),
        name: requestModel.name,
      };
    } catch (error: any) {
      const repositoryError = new RepositoryError('Could not create `+resourceUpper+`');
      repositoryError.stack = error.stack;
      throw repositoryError;
    }
  }
}

`;
    },
  };
  