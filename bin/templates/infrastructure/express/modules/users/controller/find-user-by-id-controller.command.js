module.exports = {
    get: function (resource) {
      return `import { Controller, RequestModel, ResponseHandler } from '../../../adapters/express-route-adapter';
import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { User } from '../interface/user-interface';
import { FindUserByIdUseCase } from '../interface/find-user-by-id-use-case';

export class FindUserByIdController implements Controller<User | never> {
constructor(private readonly repository: FindUserByIdUseCase, private readonly presenter: ResponseHandler<User>) {}

public async handleRequest(requestModel: RequestModel<void, { id: string }>) {
    if (!requestModel || !requestModel.params || !requestModel.params.id) {
    throw new RequestValidationError('Missing params');
    }

    const { id } = requestModel.params;
    const user = await this.repository.findById(id);
    return await this.presenter.response(user);
}
}                  
`;
    },
  };
  