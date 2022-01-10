module.exports = {
    get: function (resource) {
      return `export interface User {
  id: string;
  email: string;
  name: string;
  password_hash: string;
}     
`;
    },
  };