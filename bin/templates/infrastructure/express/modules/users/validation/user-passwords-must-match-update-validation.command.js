module.exports = {
    get: function (resource) {
      return `import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { ValidationComposite } from '../../../../../common/validation/validation-composite';
import { UserRequestWithPasswordString } from '../use-case/create-user-use-case';

export class UserPasswordsMustMatchUpdateValidation extends ValidationComposite<UserRequestWithPasswordString> {
public async validate(request?: UserRequestWithPasswordString): Promise<void> | never {
    if (!request) {
    return;
    }
    const error = new RequestValidationError('Invalid request');

    const { password, confirmPassword, oldPassword } = request;

    if (
    typeof password === 'undefined' &&
    typeof confirmPassword === 'undefined' &&
    typeof oldPassword === 'undefined'
    ) {
    return;
    }

    if (typeof password !== 'string' || typeof confirmPassword !== 'string' || typeof oldPassword !== 'string') {
    error.messages.push('Password and confirmPassword must be strings');
    }

    if (password && !confirmPassword && oldPassword) {
    error.messages.push('Missing confirmPassword');
    }

    if (!password && confirmPassword && oldPassword) {
    error.messages.push('Missing password');
    }

    if (password && confirmPassword && !oldPassword) {
    error.messages.push('Missing oldPassword');
    }

    if (password !== confirmPassword) {
    const message = 'Password and confirmPassword must match';
    error.message = message;
    error.messages.push(message);
    }

    if (password === oldPassword && password === oldPassword) {
    error.messages.push('Password and oldPassword must not be the same');
    }

    if (error.messages.length > 1) {
    throw error;
    }
}
}
`;
    },
  };
  