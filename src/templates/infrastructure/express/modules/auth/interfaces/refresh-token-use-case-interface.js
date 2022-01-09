module.exports = {
    get: function (resource) {
      return `import { SignInResponseModel } from './sign-in-response-model-interface';

export interface RefreshTokenUseCase {
refresh(refreshToken: string): Promise<SignInResponseModel> | never;
}    
`;
    },
  };
  