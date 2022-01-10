module.exports = {
    get: function (resource) {
      return `import { FindUserByIdController } from '../controller/find-user-by-id-controller';
import { FindUserByIdRepository } from '../repository/find-user-by-id-repository';
import { GenericSuccessResponse } from '../../../../../presentation/responses/generic-success-response';
import { ValidateStringNotEmpty } from '../../../../../common/validation/validate-string-not-empty';
import { FindUserById } from '../use-case/find-user-by-id';
import { User } from '../interface/user-interface';

export const findUserByIdControllerFactory = () => {
  const findUserByIdRepository = new FindUserByIdRepository();
  const findUserByIdValidation = new ValidateStringNotEmpty();
  const findUserByIdUseCase = new FindUserById(findUserByIdRepository, findUserByIdValidation);
  const successUserPresenter = new GenericSuccessResponse<User>();
  const findUserByIdController = new FindUserByIdController(findUserByIdUseCase, successUserPresenter);

  return { findUserByIdController };
};                         
`;
    },
  };
  