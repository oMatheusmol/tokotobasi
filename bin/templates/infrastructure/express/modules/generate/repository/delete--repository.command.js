const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import db from '../../../../knex/config/knex.dataBase';
import { `+resourceUpper+` } from '../interface/`+resourceLower+`-interface';

export class Delete`+resourceUpper+`ByIdRepository {
  private readonly table = '`+resourceLower+`s';

  async deleteById(id: string): Promise<number> {
    const deleted = await db<`+resourceUpper+`>(this.table).delete().where({ id });
    return deleted;
  }
}
`;
    },
  };
  