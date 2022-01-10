import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { isString } from '../../../../../common/utils/isString';
import { ValidationComposite } from '../../../../../common/validation/validation-composite';
import { UserRequestWithPasswordString } from '../use-case/create-user-use-case';

export class UserRequiredFieldsValidation extends ValidationComposite<UserRequestWithPasswordString> {
  public async validate(request: UserRequestWithPasswordString): Promise<void> | never {
    const error = new RequestValidationError('Invalid request');
    const { name, email, password, confirmPassword } = request;

    if (!isString(name) || !name) {
      error.messages.push('Missing field first_name');
    }

    if (!isString(email) || !email) {
      error.messages.push('Missing field email');
    }

    if (!isString(password) || !password) {
      error.messages.push('Missing field password');
    }

    if (!isString(confirmPassword) || !confirmPassword) {
      error.messages.push('Missing field confirmPassword');
    }

    if (error.messages.length > 1) {
      throw error;
    }
  }
}
