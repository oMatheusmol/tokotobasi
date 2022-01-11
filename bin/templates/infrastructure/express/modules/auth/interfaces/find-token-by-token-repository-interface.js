module.exports = {
    get: function (resource) {
      return `import { Token } from './token-interface';

export interface FindTokenByTokenRepository {
findByToken(token: string): Promise<Token | null>;
}     
`;
    },
  };
  