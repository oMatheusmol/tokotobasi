module.exports = {
    get: function (resource) {
      return `import { CreateUserController } from '../controller/create-user-controller';
import { CreateUser } from '../use-case/create-user-use-case';
import { CreateUserValidation } from '../validation/create-user-validation';
import { CreateUserRepository } from '../repository/create-user-repository';
import { FindUserByEmailRepository } from '../repository/find-user-by-email-repository';
import { GenericCreatedResponse } from '../../../../../presentation/responses/generic-created-response';
import { BCryptAdapter } from '../../../../../common/utils/bcrypt-adapter';
import { User } from '../interface/user-interface';

export const createUserControllerFactory = () => {
  const bcryptAdapter = new BCryptAdapter();
  const createUserRepository = new CreateUserRepository();
  const findUserByEmailRepository = new FindUserByEmailRepository();
  const createUserValidation = new CreateUserValidation();
  const createUserUseCase = new CreateUser(
      bcryptAdapter,
      createUserRepository,
      findUserByEmailRepository,
      createUserValidation,
  );
  const successUserPresenter = new GenericCreatedResponse<User>();
  const createUserController = new CreateUserController(createUserUseCase, successUserPresenter);

  return { createUserController };
};                     
`;
    },
  };
  