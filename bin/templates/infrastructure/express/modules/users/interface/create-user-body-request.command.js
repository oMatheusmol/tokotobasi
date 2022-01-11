module.exports = {
    get: function (resource) {
      return `export interface CreateUserBodyRequest {
email: string;
name: string;
password: string;
confirmPassword: string;
}  
`;
    },
  };
  