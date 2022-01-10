import { DeleteUserByIdController } from '../controller/delete-user-by-id-controller';
import { FindUserByIdRepository } from '../repository/find-user-by-id-repository';
import { DeleteUserByIdRepository } from '../repository/delete-user-by-id-repository';
import { DeleteUserByIdValidation } from '../validation/delete-user-by-id-validation';
import { DeleteUserById } from '../use-case/delete-user-by-id';
import { GenericDeletedResponse } from '../../../../../presentation/responses/generic-deleted-response';
import { GenericMessageResponse } from '../../../../../presentation/responses/generic-message-response';

export const deleteUserByIdControllerFactory = () => {
    const deleteUserByIdValidation = new DeleteUserByIdValidation();
    const deleteUserByIRepository = new DeleteUserByIdRepository();
    const findUserByIdRepository = new FindUserByIdRepository();
    const deleteUserByIdUseCase = new DeleteUserById(
        deleteUserByIRepository,
        findUserByIdRepository,
        deleteUserByIdValidation,
    );
    const genericDeleteUserById = new GenericDeletedResponse<GenericMessageResponse>();
    const deleteUserByIdController = new DeleteUserByIdController(deleteUserByIdUseCase, genericDeleteUserById);
    return { deleteUserByIdController };
};                    
