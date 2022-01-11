module.exports = {
    get: function (resource) {
      return `import { DefaultApplicationError } from './default-application-error';

export class NotFoundError extends DefaultApplicationError {
  statusCode = 404;
  name = 'NotFoundError';
}
  `;
    },
  };
  