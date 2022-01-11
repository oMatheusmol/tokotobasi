module.exports = {
    get: function (resource) {
      return `import bcrypt from 'bcrypt';

export class BCryptAdapter implements PasswordHashing {
  private readonly saltRounds = 10;

  public async hash(password: string): Promise<string> {
    const passwordHash = await bcrypt.hash(password, this.saltRounds);
    return passwordHash;
  }

  public async compare(password: string, hash: string): Promise<boolean> {
    const valid = await bcrypt.compare(password, hash);
    return valid;
  }
}

export interface PasswordHashing {
  hash(password: string): Promise<string>;
  compare(password: string, hash: string): Promise<boolean>;
}

  `;
    },
  };
  