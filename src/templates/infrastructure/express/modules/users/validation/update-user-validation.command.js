module.exports = {
    get: function (resource) {
      return `import { UserRequiredFieldsValidation } from './user-required-fields-validation';
import { UserPasswordsMustMatchUpdateValidation } from './user-passwords-must-match-update-validation';
import { UserCompositeValidation } from './user-composite-validation';
import { EmailValidation } from '../../../../../common/validation/user-email-validation';
import { EmailValidatorAdapter } from '../../../../../common/validation/email-validator-adapter';

export class UpdateUserValidation extends UserCompositeValidation {
constructor() {
    super();
    this.add(new UserRequiredFieldsValidation());
    this.add(new UserPasswordsMustMatchUpdateValidation());
    this.add(new EmailValidation(new EmailValidatorAdapter()));
}
}      
`;
    },
  };
  