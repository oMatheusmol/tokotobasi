const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { FindAll`+resourceUpper+`sController } from '../controller/find-all-`+resourceLower+`s-controller';
import { FindAll`+resourceUpper+`sRepository } from '../repository/find-all-`+resourceLower+`s-repository';
import { GenericSuccessResponse } from '../../../../../presentation/responses/generic-success-response';
import { FindAll`+resourceUpper+`sValidation } from '../validation/find-all-`+resourceLower+`s-validation';
import { FindAll`+resourceUpper+`s } from '../use-case/find-all-`+resourceLower+`s';
import { `+resourceUpper+` } from '../interface/`+resourceLower+`-interface';

export const findAll`+resourceUpper+`sControllerFactory = () => {
  const findAll`+resourceUpper+`sValidation = new FindAll`+resourceUpper+`sValidation();
  const findAll`+resourceUpper+`sRepository = new FindAll`+resourceUpper+`sRepository();
  const findAll`+resourceUpper+`sUseCase = new FindAll`+resourceUpper+`s(findAll`+resourceUpper+`sRepository, findAll`+resourceUpper+`sValidation);
  const genericSuccessResponse = new GenericSuccessResponse<`+resourceUpper+`[]>();
  const findAll`+resourceUpper+`sController = new FindAll`+resourceUpper+`sController(findAll`+resourceUpper+`sUseCase, genericSuccessResponse);

  return { findAll`+resourceUpper+`sController };
};
`;
    },
  };
  