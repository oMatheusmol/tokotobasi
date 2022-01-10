import { UserRequiredFieldsValidation } from './user-required-fields-validation';
import { UserPasswordsMustMatchValidation } from './user-passwords-must-match-validation';
import { UserCompositeValidation } from './user-composite-validation';
import { EmailValidation } from '../../../../../common/validation/user-email-validation';
import { EmailValidatorAdapter } from '../../../../../common/validation/email-validator-adapter';

export class CreateUserValidation extends UserCompositeValidation {
constructor() {
    super();
    this.add(new UserRequiredFieldsValidation());
    this.add(new UserPasswordsMustMatchValidation());
    this.add(new EmailValidation(new EmailValidatorAdapter()));
}
}          
