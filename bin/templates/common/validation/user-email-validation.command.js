module.exports = {
    get: function (resource) {
      return `/* eslint-disable @typescript-eslint/no-explicit-any */
import { EmailValidationError } from '../errors/email-validation-error';
import { EmailValidatorAdapter } from './email-validator-adapter';
import { ValidationComposite } from './validation-composite';

export class EmailValidation extends ValidationComposite<unknown> {
  constructor(private readonly emailValidator: EmailValidatorAdapter) {
    super();
  }

  async validate(request?: any): Promise<void> | never {
    if (!request) {
      return;
    }

    const { email } = request;

    if (typeof email === 'undefined') {
      return;
    }

    if (!(await this.emailValidator.isValid(email))) {
      throw new EmailValidationError('Invalid e-mail');
    }
  }
}
  `;
    },
  };
  