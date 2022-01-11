module.exports = {
    get: function (resource) {
      return `import { DefaultApplicationError } from './default-application-error';

export class ExistsError extends DefaultApplicationError {
  statusCode = 409;
  name = 'ExistsError';
}
  `;
    },
  };
  