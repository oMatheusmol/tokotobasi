module.exports = {
    get: function (resource) {
      return `import { NotFoundError } from '../../../../../common/errors/not-found-error';
import { ValidationComposite } from '../../../../../common/validation/validation-composite';
import { DeleteUserByIdRepository } from '../interface/delete-user-by-id';
import { FindUserByIdRepository } from '../interface/find-user-by-id-repository';

export class DeleteUserById {
constructor(
    private readonly deleteUserByIRepository: DeleteUserByIdRepository,
    private readonly findUserByIdRepository: FindUserByIdRepository,
    private readonly validation: ValidationComposite,
) {}

async deleteById(id: string): Promise<number> | never {
    await this.validation.validate(id);
    const user = await this.findUserByIdRepository.findById(id);

    if (!user) {
    throw new NotFoundError('User does not exist');
    }

    const deleted = await this.deleteUserByIRepository.deleteById(id);
    return deleted;
}
}              
`;
    },
  };
  