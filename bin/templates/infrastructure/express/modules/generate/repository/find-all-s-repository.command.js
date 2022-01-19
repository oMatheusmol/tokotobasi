const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import db from '../../../../knex/config/knex.dataBase';
import { `+resourceUpper+` } from '../interface/`+resourceLower+`-interface';

export class FindAll`+resourceUpper+`sRepository {
  private readonly table = '`+resourceLower+`s';

  public async find(order: 'asc' | 'desc', limit: number, offset: number): Promise<`+resourceUpper+`[]> {
    const `+resourceLower+`s = await db(this.table)
      .select('id', 'name')
      .orderBy('id', order)
      .limit(limit)
      .offset(offset);
    return `+resourceLower+`s;
  }
}
`;
    },
  };
  