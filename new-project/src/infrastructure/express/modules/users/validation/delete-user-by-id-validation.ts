import { ValidateStringNotEmpty } from '../../../../../common/validation/validate-string-not-empty';
import { UserCompositeValidation } from './user-composite-validation';

export class DeleteUserByIdValidation extends UserCompositeValidation {
constructor() {
    super();
    this.add(new ValidateStringNotEmpty());
}
}    
