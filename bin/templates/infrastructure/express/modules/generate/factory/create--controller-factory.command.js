const pluralize = require('pluralize');
const utils = require('../../../../../../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));
    let resourceUpper = pluralize.singular(utils.toFirstCase(resource, true));
      return `import { GenericCreatedResponse } from '../../../../../presentation/responses/generic-created-response';
import { `+resourceUpper+` } from '../interface/`+resourceLower+`-interface';
import { Create`+resourceUpper+`Validation } from '../validation/create-`+resourceLower+`-validation';
import { Find`+resourceUpper+`ByNameRepository } from '../repository/find-`+resourceLower+`-by-name-repository';
import { Create`+resourceUpper+`Repository } from '../repository/create-`+resourceLower+`-repository';
import { Create`+resourceUpper+` } from '../use-case/create-`+resourceLower+`-use-case';
import { Create`+resourceUpper+`Controller } from '../controller/create-`+resourceLower+`-controller';

export const create`+resourceUpper+`ControllerFactory = () => {
  const create`+resourceUpper+`Validation = new Create`+resourceUpper+`Validation();
  const find`+resourceUpper+`ByNameRepository = new Find`+resourceUpper+`ByNameRepository();
  const create`+resourceUpper+`Repository = new Create`+resourceUpper+`Repository();
  const create`+resourceUpper+`UseCase = new Create`+resourceUpper+`(
    create`+resourceUpper+`Repository,
    find`+resourceUpper+`ByNameRepository,
    create`+resourceUpper+`Validation,
  );
  const successUserPresenter = new GenericCreatedResponse<`+resourceUpper+`>();
  const create`+resourceUpper+`Controller = new Create`+resourceUpper+`Controller(create`+resourceUpper+`UseCase, successUserPresenter);

  return { create`+resourceUpper+`Controller };
};
`;
    },
  };
  