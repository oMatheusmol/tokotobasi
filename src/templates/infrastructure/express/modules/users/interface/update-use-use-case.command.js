module.exports = {
    get: function (resource) {
      return `import { UpdateUserBodyRequest } from './update-user-body-request';

export interface UpdateUserUseCase {
  update(id: string, requestModel: UpdateUserBodyRequest): Promise<number | never>;
}
`;
    },
  };