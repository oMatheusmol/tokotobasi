import { SignInRequestModel } from './sign-in-request-model-interface';
import { SignInResponseModel } from './sign-in-response-model-interface';

export interface SignInUseCase {
verify(signInModel: SignInRequestModel): Promise<SignInResponseModel> | never;
}     
