const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { GenericDeletedResponse } from '../../../../../presentation/responses/generic-deleted-response';
import { GenericMessageResponse } from '../../../../../presentation/responses/generic-message-response';
import { Delete`+resourceUpper+`ByIdValidation } from '../validation/delete-`+resourceLower+`-by-id-validation';
import { Delete`+resourceUpper+`ByIdRepository } from '../repository/delete-`+resourceLower+`-by-id-repository';
import { Find`+resourceUpper+`ByIdRepository } from '../repository/find-`+resourceLower+`-by-id-repository';
import { Delete`+resourceUpper+`ById } from '../use-case/delete-`+resourceLower+`-by-id';
import { Delete`+resourceUpper+`ByIdController } from '../controller/delete-`+resourceLower+`-by-id-controller';

export const delete`+resourceUpper+`ByIdControllerFactory = () => {
  const delete`+resourceUpper+`ByIdValidation = new Delete`+resourceUpper+`ByIdValidation();
  const delete`+resourceUpper+`ByIRepository = new Delete`+resourceUpper+`ByIdRepository();
  const find`+resourceUpper+`ByIdRepository = new Find`+resourceUpper+`ByIdRepository();
  const delete`+resourceUpper+`ByIdUseCase = new Delete`+resourceUpper+`ById(
    delete`+resourceUpper+`ByIRepository,
    find`+resourceUpper+`ByIdRepository,
    delete`+resourceUpper+`ByIdValidation,
  );
  const genericDelete`+resourceUpper+`ById = new GenericDeletedResponse<GenericMessageResponse>();
  const delete`+resourceUpper+`ByIdController = new Delete`+resourceUpper+`ByIdController(
    delete`+resourceUpper+`ByIdUseCase,
    genericDelete`+resourceUpper+`ById,
  );
  return { delete`+resourceUpper+`ByIdController };
};
`;
    },
  };
  