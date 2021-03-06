module.exports = {
    get: function (resource) {
      return `import validator from 'validator';

export class EmailValidatorAdapter {
  async isValid(email: string): Promise<boolean> {
    return validator.isEmail(email);
  }
}
  `;
    },
  };
  