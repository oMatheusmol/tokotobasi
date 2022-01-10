module.exports = {
    get: function (resource) {
      return `export interface DeleteUserByIdRepository {
deleteById(id: string): Promise<number>;
}  
`;
    },
  };