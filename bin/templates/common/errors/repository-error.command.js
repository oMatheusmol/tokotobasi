module.exports = {
    get: function (resource) {
      return `import { DefaultApplicationError } from './default-application-error';

export class RepositoryError extends DefaultApplicationError {
  name = 'RepositoryError';
  statusCode = 500;
}
  `;
    },
  };
  