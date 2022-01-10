module.exports = {
    get: function (resource) {
      return `import { ExistsError } from '../../../../../common/errors/exists-error';
import { PasswordHashing } from '../../../../../common/utils/bcrypt-adapter';
import { CreateUserBodyRequest } from '../interface/create-user-body-request';
import { CreateUserRepository } from '../interface/create-user-repository';
import { FindUserByEmailRepository } from '../interface/find-user-by-email-repository';
import { User } from '../interface/user-interface';
import { CreateUserValidation } from '../validation/create-user-validation';

export class CreateUser {
constructor(
    private readonly passwordHashing: PasswordHashing,
    private readonly createUserRepository: CreateUserRepository,
    private readonly findUserByIdRespository: FindUserByEmailRepository,
    private readonly validation: CreateUserValidation,
) {}

public async create(userData: CreateUserBodyRequest): Promise<User> {
    await this.validation.validate(userData);

    const userExist = await this.findUserByIdRespository.findByEmail(userData.email);

    if (userExist) throw new ExistsError('User already created');

    const password_hash = await this.passwordHashing.hash(userData.password);

    const userWithPasswordHash = {
    name: userData.name,
    email: userData.email,
    password_hash,
    };
    const user = await this.createUserRepository.create(userWithPasswordHash);
    return user;
}
}

export type UserRequestWithPasswordString = Omit<User, 'id'> & PasswordAndConfirmPasswordString;

export type PasswordAndConfirmPasswordString = {
password: string;
confirmPassword: string;
oldPassword?: string;
};          
`;
    },
  };
  