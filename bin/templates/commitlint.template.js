module.exports = {
  get: function (resource) {
    return `module.exports = {
  extends: ['@commitlint/config-conventional'],
};
`;
  },
};
