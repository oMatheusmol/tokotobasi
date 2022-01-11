module.exports = {
    get: function (resource) {
      return `import { DefaultApplicationError } from './default-application-error';

export class EmailValidationError extends DefaultApplicationError {
  statusCode = 400;
  name = 'EmailValidationError';
}
  `;
    },
  };
  