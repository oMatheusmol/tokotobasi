const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { Find`+resourceUpper+`ByIdController } from '../controller/find-`+resourceLower+`-by-id-controller';
import { Find`+resourceUpper+`ByIdRepository } from '../repository/find-`+resourceLower+`-by-id-repository';
import { GenericSuccessResponse } from '../../../../../presentation/responses/generic-success-response';
import { Find`+resourceUpper+`ById } from '../use-case/find-`+resourceLower+`-by-id';
import { `+resourceUpper+` } from '../interface/`+resourceLower+`-interface';
import { ValidateStringNotEmpty } from '../../../../../common/validation/validate-string-not-empty';

export const find`+resourceUpper+`ByIdControllerFactory = () => {
  const find`+resourceUpper+`ByIdValidation = new ValidateStringNotEmpty();
  const find`+resourceUpper+`ByIdRepository = new Find`+resourceUpper+`ByIdRepository();
  const find`+resourceUpper+`ByIdUseCase = new Find`+resourceUpper+`ById(find`+resourceUpper+`ByIdRepository, find`+resourceUpper+`ByIdValidation);
  const genericSuccessResponse = new GenericSuccessResponse<`+resourceUpper+`>();
  const find`+resourceUpper+`ByIdController = new Find`+resourceUpper+`ByIdController(find`+resourceUpper+`ByIdUseCase, genericSuccessResponse);

  return { find`+resourceUpper+`ByIdController };
};
`;
    },
  };
  