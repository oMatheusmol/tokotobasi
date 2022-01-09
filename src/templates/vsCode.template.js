module.exports = {
  get: function (resource) {
    const workspaceFolder = '${workspaceFolder}'
    return `{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node-terminal",
      "name": "Run Script: dev",
      "request": "launch",
      "command": "npm run dev",
      "cwd": "${workspaceFolder}"
    }
  ]
}
`;
  },
};
