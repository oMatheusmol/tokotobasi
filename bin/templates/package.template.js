const pluralize = require('pluralize');
const utils = require('../utils/utils');

module.exports = {
  get: function (resource) {
    let resourceLower = pluralize.singular(utils.toFirstCase(resource, false));

    return `{
  "name": "${resourceLower}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "commit": "git-cz",
    "dev": "ts-node-dev src/infrastructure/express/server.ts",
    "database:up": "docker-compose up -d",
    "database:down": "docker-compose down",
    "docker:dropAll": "docker stop $(docker ps -a -q) && docker system prune -f",
    "migrate:make": "knex --knexfile src/infrastructure/knex/knexfile.ts migrate:make",
    "migrate": "knex --knexfile ./src/infrastructure/knex/knexfile.ts migrate:latest",
    "migrate:list": "knex --knexfile ./src/infrastructure/knex/knexfile.ts migrate:list",
    "migrate:rollback": "knex --knexfile ./src/infrastructure/knex/knexfile.ts migrate:rollback",
    "lint": "eslint src --fix",
    "test": "jest --detectOpenHandles --forceExit --bail --runInBand --silent --setupFiles",
    "test:lintStaged": "npm test -- --findRelatedTests",
    "test:coverage": "npm test -- --coverage",
    "test:watch": "npm test -- --watch",
    "test:watchAll": "npm test -- --watchAll"
  },
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.12.10",
    "@babel/core": "^7.12.10",
    "@babel/node": "^7.12.10",
    "@babel/preset-env": "^7.12.10",
    "@babel/preset-typescript": "^7.12.7",
    "@commitlint/cli": "^15.0.0",
    "@commitlint/config-conventional": "^15.0.0",
    "@types/bcrypt": "^5.0.0",
    "@types/express": "^4.17.13",
    "@types/express-rate-limit": "^5.1.3",
    "@types/jest": "^27.0.3",
    "@types/jsonwebtoken": "^8.5.6",
    "@types/knex": "^0.16.1",
    "@types/sanitize-html": "^2.6.0",
    "@types/supertest": "^2.0.11",
    "@types/swagger-tools": "^0.10.7",
    "@types/swagger-ui-express": "^4.1.3",
    "@types/validator": "^13.7.0",
    "@typescript-eslint/eslint-plugin": "^5.6.0",
    "@typescript-eslint/parser": "^5.5.0",
    "babel-plugin-module-resolver": "^4.0.0",
    "cz-conventional-changelog": "^3.3.0",
    "eslint": "^8.3.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "^27.4.2",
    "nodemon": "^2.0.15",
    "prettier": "^2.5.0",
    "supertest": "^6.1.6",
    "ts-jest": "^27.0.7",
    "ts-node": "^10.4.0",
    "ts-node-dev": "^1.1.8",
    "typescript": "^4.5.2"
  },
  "dependencies": {
    "bcrypt": "^5.0.1",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-rate-limit": "^5.5.1",
    "helmet": "^4.6.0",
    "jsonwebtoken": "^8.5.1",
    "knex": "^0.95.14",
    "mysql2": "^2.3.3",
    "sanitize-html": "^2.6.0",
    "swagger-tools": "^0.10.4",
    "swagger-ui-express": "^4.2.0",
    "validator": "^13.7.0"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
`;
  },
};
