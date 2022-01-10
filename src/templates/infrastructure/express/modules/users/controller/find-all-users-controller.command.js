module.exports = {
    get: function (resource) {
      return `import { Controller, RequestModel, ResponseHandler } from '../../../adapters/express-route-adapter';
import { FindAllUsersUseCase } from '../interface/find-all-users-use_case';
import { User } from '../interface/user-interface';

type FindAllUsersRequestModel = RequestModel<
void,
void,
{
    order?: 'desc' | 'asc';
    limit?: number;
    offset?: number;
}
>;

export class FindAllUsersController implements Controller<User[] | never> {
constructor(
    private readonly findAllUsersUseCase: FindAllUsersUseCase,
    private readonly findAllUsersPresenter: ResponseHandler<User[]>,
) {}

async handleRequest(requestModel?: FindAllUsersRequestModel) {
    let query: FindAllUsersRequestModel['query'];

    if (requestModel && requestModel.query) {
    query = requestModel.query;
    }

    const users = await this.findAllUsersUseCase.findAll(query);
    return this.findAllUsersPresenter.response(users);
}
}               
`;
    },
  };
  