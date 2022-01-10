module.exports = {
    get: function (resource) {
      return `export interface CreateUser {
email: string;
name: string;
password_hash: string;
}     
`;
    },
  };