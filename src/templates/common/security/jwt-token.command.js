module.exports = {
    get: function (resource) {
      return `export interface JwtToken {
signAccessToken(userId: string): SignedToken;
signRefreshToken(userId: string): SignedToken;
verify(jwtToken: string, isAccessToken?: boolean): string;
}

export type SignedToken = { token: string; expirationDate: Date };
  `;
    },
  };