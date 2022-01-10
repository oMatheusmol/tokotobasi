module.exports = {
    get: function (resource) {
      return `import { ValidationComposite } from '../../../../../common/validation/validation-composite';
import { FindAllUsersRepository } from '../interface/find-all-users-repository';
import { User } from '../interface/user-interface';
import { FindAllUsersRequestModel } from '../validation/find-all-users-validation';

export class FindAllUsers {
constructor(
    private readonly findAllUsersRepository: FindAllUsersRepository,
    private readonly validation: ValidationComposite<FindAllUsersRequestModel>,
) {}

async findAll(request?: FindAllUsersRequestModel): Promise<User[]> | never {
    let order: 'desc' | 'asc' = 'desc';
    let limit = 100;
    let offset = 0;

    if (request) {
    if (request.order) order = request.order;
    if (request.limit) limit = request.limit;
    if (request.offset) offset = request.offset;
    }

    await this.validation.validate({ order, limit, offset });
    const users = await this.findAllUsersRepository.find(order, limit, offset);
    return users;
}
}                 
`;
    },
  };
  