import { FindAllUsersController } from '../controller/find-all-users-controller';
import { FindAllUsersRepository } from '../repository/find-all-users-repository';
import { GenericSuccessResponse } from '../../../../../presentation/responses/generic-success-response';
import { FindAllUsersValidation } from '../validation/find-all-users-validation';
import { FindAllUsers } from '../use-case/find-all-users';
import { User } from '../interface/user-interface';

export const findAllUsersControllerFactory = () => {
  const findAllUsersValidation = new FindAllUsersValidation();
  const findAllUsersRepository = new FindAllUsersRepository();
  const findAllUsersUseCase = new FindAllUsers(findAllUsersRepository, findAllUsersValidation);
  const genericSuccessResponse = new GenericSuccessResponse<User[]>();
  const findAllUsersController = new FindAllUsersController(findAllUsersUseCase, genericSuccessResponse);

    return { findAllUsersController };
};                       
