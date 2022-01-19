const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import db from '../../../../knex/config/knex.dataBase';
import { `+resourceUpper+` } from '../interface/`+resourceLower+`-interface';

export class Find`+resourceUpper+`ByNameRepository {
  public async findByName(name: string): Promise<`+resourceUpper+` | null> {
    const table = '`+resourceLower+`s';
    const `+resourceLower+` = await db<`+resourceUpper+`>(table).where({ name }).first();
    if (!`+resourceLower+`) return null;
    return { ...`+resourceLower+`, id: student.id.toString() };
  }
}
`;
    },
  };
  