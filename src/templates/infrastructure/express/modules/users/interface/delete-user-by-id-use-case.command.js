module.exports = {
    get: function (resource) {
      return `export interface DeleteUserByIdUseCase {
deleteById(id: string): Promise<number> | never;
}
`;
    },
  };