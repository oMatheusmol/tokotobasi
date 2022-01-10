module.exports = {
    get: function (resource) {
      return `import { UpdateUserBodyRepository } from './update-user-body-repository';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UpdateUserByIdRepository {
  update(id: string, requestModel: UpdateUserBodyRepository): Promise<number | never>;
}
`;
    },
  };