module.exports = {
    get: function (resource) {
      return `export interface Role {
id: string;
name: string;
description?: string;
}   
`;
    },
  };