module.exports = {
    get: function (resource) {
      return `export interface Token {
id: string;
token: string;
user_id: string;
expires_in: string;
} 
`;
    },
  };
  