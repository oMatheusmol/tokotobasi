module.exports = {
    get: function (resource) {
      return `export interface SignInRequestModel {
    email: string;
    password: string;
}        
`;
    },
  };
  