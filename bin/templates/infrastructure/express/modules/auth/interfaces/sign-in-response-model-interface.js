module.exports = {
    get: function (resource) {
      return `export interface SignInResponseModel {
token: string;
refreshToken: string;
}    
`;
    },
  };
  