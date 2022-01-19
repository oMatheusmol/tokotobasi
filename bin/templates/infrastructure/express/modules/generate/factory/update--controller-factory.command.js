const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { Update`+resourceUpper+`ByIdRepository } from '../repository/update-`+resourceLower+`-by-id-repository';
import { Update`+resourceUpper+`Controller } from '../controller/update-`+resourceLower+`-controller';
import { Update`+resourceUpper+` } from '../use-case/update-`+resourceLower+`-use-case';
import { Update`+resourceUpper+`Validation } from '../validation/update-`+resourceLower+`-validation';
import { GenericUpdatedResponse } from '../../../../../presentation/responses/generic-updated-response';
import { GenericMessageResponse } from '../../../../../presentation/responses/generic-message-response';
import { Find`+resourceUpper+`ByIdRepository } from '../repository/find-`+resourceLower+`-by-id-repository';
import { Find`+resourceUpper+`ByNameRepository } from '../repository/find-`+resourceLower+`-by-name-repository';

export const update`+resourceUpper+`ControllerFactory = () => {
  const update`+resourceUpper+`Validation = new Update`+resourceUpper+`Validation();
  const find`+resourceUpper+`ById = new Find`+resourceUpper+`ByIdRepository();
  const update`+resourceUpper+`ById = new Update`+resourceUpper+`ByIdRepository();
  const find`+resourceUpper+`ByNameRepository = new Find`+resourceUpper+`ByNameRepository();
  const update`+resourceUpper+`UseCase = new Update`+resourceUpper+`(
    find`+resourceUpper+`ById,
    update`+resourceUpper+`ById,
    find`+resourceUpper+`ByNameRepository,
    update`+resourceUpper+`Validation,
  );
  const genericUpdatedResponse = new GenericUpdatedResponse<GenericMessageResponse>();
  const update`+resourceUpper+`Controller = new Update`+resourceUpper+`Controller(update`+resourceUpper+`UseCase, genericUpdatedResponse);

  return { update`+resourceUpper+`Controller };
};
`;
    },
  };
  