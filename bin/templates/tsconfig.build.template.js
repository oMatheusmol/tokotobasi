module.exports = {
  get: function (resource) {
    return `{
  "extends": "tsconfig.json",
  "exclude": [
    "**/*.test.ts",
    "**/*.mock.ts",
    "**/*.spec.ts"
  ]
}
`;
  },
};
