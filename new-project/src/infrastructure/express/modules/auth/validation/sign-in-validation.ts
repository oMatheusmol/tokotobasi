import { EmailValidatorAdapter } from '../../../../../common/validation/email-validator-adapter';
import { EmailValidation } from '../../../../../common/validation/user-email-validation';
import { ValidationComposite } from '../../../../../common/validation/validation-composite';
import { SignInRequestModel } from '../interface/sign-in-request-model-interface';
import { SignInRequiredFieldsValidation } from '../validation/sign-in-required-fields-validation';

export class SignInValidation extends ValidationComposite<SignInRequestModel> {
constructor() {
    super();
    this.add(new SignInRequiredFieldsValidation());
    this.add(new EmailValidation(new EmailValidatorAdapter()));
}

async validate(signInModel: SignInRequestModel): Promise<void> | never {
    for (const validation of this.validations) {
    await validation.validate(signInModel);
    }
}
}      
