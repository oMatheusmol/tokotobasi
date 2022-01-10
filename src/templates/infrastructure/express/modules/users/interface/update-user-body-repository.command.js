module.exports = {
    get: function (resource) {
      return `export interface UpdateUserBodyRepository {
email: string;
name: string;
password_hash: string;
} 
`;
    },
  };