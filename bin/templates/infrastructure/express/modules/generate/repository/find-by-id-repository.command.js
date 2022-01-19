const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import db from '../../../../knex/config/knex.dataBase';
import { `+resourceUpper+` } from '../interface/`+resourceLower+`-interface';

export class Find`+resourceUpper+`ByIdRepository {
  private readonly table = '`+resourceLower+`s';

  public async findById(id: string): Promise<`+resourceUpper+` | null> {
    const `+resourceLower+` = await db<`+resourceUpper+`>(this.table).where({ id }).first();
    if (!`+resourceLower+`) return null;
    return { ...`+resourceLower+`, id: `+resourceLower+`.id.toString() };
  }
}
`;
    },
  };
  