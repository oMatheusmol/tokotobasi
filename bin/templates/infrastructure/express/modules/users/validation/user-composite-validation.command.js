module.exports = {
    get: function (resource) {
      return `import { InternalServerError } from '../../../../../common/errors/internal-server-error';
import { ValidationComposite } from '../../../../../common/validation/validation-composite';
import { UserRequestWithPasswordString } from '../use-case/create-user-use-case';

export class UserCompositeValidation extends ValidationComposite<UserRequestWithPasswordString> {
public async validate(request: unknown): Promise<void> | never {
    if (this.validations.length === 0) {
    throw new InternalServerError('Composite has no validations');
    }

    for (const validation of this.validations) {
    await validation.validate(request);
    }
}
}   
`;
    },
  };
  