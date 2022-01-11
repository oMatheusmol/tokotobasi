module.exports = {
    get: function (resource) {
      return `import { RequestValidationError } from '../errors/request-validation-error';
import { ValidationComposite } from './validation-composite';

export class ValidateStringNotEmpty extends ValidationComposite<string> {
  public async validate(string: string): Promise<void> | never {
    if (typeof string !== 'string' || !string) {
      throw new RequestValidationError('Expected a string with a value');
    }
  }
}
  `;
    },
  };
  