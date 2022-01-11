module.exports = {
    get: function (resource) {
      return `import { Token } from './token-interface';
import { TokenRequestModel } from './token-request-model-interface';

export interface CreateTokenRepository {
    create(tokenModel: TokenRequestModel): Promise<Token> | never;
}
`;
    },
  };
  