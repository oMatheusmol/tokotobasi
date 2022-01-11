module.exports = {
    get: function (resource) {
      return `import { NotFoundError } from '../../../../../common/errors/not-found-error';
import { ValidateStringNotEmpty } from '../../../../../common/validation/validate-string-not-empty';
import { FindUserByIdRepository } from '../interface/find-user-by-id-repository';
import { User } from '../interface/user-interface';

export class FindUserById {
constructor(
    private readonly userRepository: FindUserByIdRepository,
    private readonly validation: ValidateStringNotEmpty,
) {}

public async findById(id: string): Promise<User | never> {
    this.validation.validate(id);
    const user = await this.userRepository.findById(id);

    if (!user) throw new NotFoundError('User not found');

    return user;
}
}                     
`;
    },
  };
  