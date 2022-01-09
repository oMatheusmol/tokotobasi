module.exports = {
    get: function (resource) {
      return `import { RequestValidationError } from '../../../../../common/errors/request-validation-error';
import { ValidationComposite } from '../../../../../common/validation/validation-composite';
import { SignInRequestModel } from '../interface/sign-in-request-model-interface';

export class SignInRequiredFieldsValidation extends ValidationComposite<SignInRequestModel> {
async validate(request: SignInRequestModel): Promise<void> | never {
    const error = new RequestValidationError('Invalid request');

    const { email, password } = request;

    if (!this.isValidField(email)) {
    error.messages.push('Missing field email');
    }

    if (!this.isValidField(password)) {
    error.messages.push('Missing field password');
    }

    if (error.messages.length > 1) {
    throw error;
    }
}

private isValidField(field?: unknown): boolean {
    if (typeof field === 'undefined') {
    return true;
    }

    if (typeof field !== 'string') {
    return false;
    }

    if (field === '') {
    return false;
    }

    return true;
}
}     
`;
    },
  };
  