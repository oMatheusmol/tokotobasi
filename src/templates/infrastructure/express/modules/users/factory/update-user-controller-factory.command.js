module.exports = {
    get: function (resource) {
      return `import { BCryptAdapter } from '../../../../../common/utils/bcrypt-adapter';
import { FindUserByEmailRepository } from '../repository/find-user-by-email-repository';
import { FindUserByIdRepository } from '../repository/find-user-by-id-repository';
import { UpdateUserByIdRepository } from '../repository/update-user-by-id-repository';
import { UpdateUserController } from '../controller/update-user-controller';
import { UpdateUser } from '../use-case/update-user-use-case';
import { UpdateUserValidation } from '../validation/update-user-validation';
import { GenericUpdatedResponse } from '../../../../../presentation/responses/generic-updated-response';
import { GenericMessageResponse } from '../../../../../presentation/responses/generic-message-response';

export const updateUserControllerFactory = () => {
    const bcryptAdapter = new BCryptAdapter();
    const updateUserValidation = new UpdateUserValidation();
    const findUserById = new FindUserByIdRepository();
    const findUserByEmailRepository = new FindUserByEmailRepository();
    const updateUserById = new UpdateUserByIdRepository();
    const updateUserUseCase = new UpdateUser(
        bcryptAdapter,
        findUserById,
        updateUserById,
        findUserByEmailRepository,
        updateUserValidation,
    );
    const genericUpdatedResponse = new GenericUpdatedResponse<GenericMessageResponse>();
    const updateUserController = new UpdateUserController(updateUserUseCase, genericUpdatedResponse);

    return { updateUserController };
};                             
`;
    },
  };
  