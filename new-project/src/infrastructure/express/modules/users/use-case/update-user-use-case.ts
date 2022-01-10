import { NotFoundError } from '../../../../../common/errors/not-found-error';
import { RepositoryError } from '../../../../../common/errors/repository-error';
import { PasswordHashing } from '../../../../../common/utils/bcrypt-adapter';
import { FindUserByEmailRepository } from '../interface/find-user-by-email-repository';
import { FindUserByIdRepository } from '../interface/find-user-by-id-repository';
import { UpdateUserBodyRequest } from '../interface/update-user-body-request';
import { UpdateUserByIdRepository } from '../interface/update-user-by-id-repository';
import { User } from '../interface/user-interface';
import { UpdateUserValidation } from '../validation/update-user-validation';

export class UpdateUser {
constructor(
    private readonly passwordHashing: PasswordHashing,
    private readonly findUser: FindUserByIdRepository,
    private readonly updateUser: UpdateUserByIdRepository,
    private readonly findUserByEmail: FindUserByEmailRepository,
    private readonly validation: UpdateUserValidation,
) {}
public async update(id: string, requestModel: UpdateUserBodyRequest): Promise<number | never> {
    await this.validation.validate(requestModel);
    await this.checkEmailExists(requestModel.email);
    const foundUser = await this.checkUserExists(id);
    await this.comparePassword(requestModel, foundUser);

    const request = {
    password_hash: await this.passwordHashing.hash(requestModel.password),
    email: requestModel.email,
    name: requestModel.name,
    };

    const updatedUser = await this.updateUser.update(id, request);
    if (updatedUser === 0 || !updatedUser) throw new RepositoryError('Could not update user');
    return updatedUser;
}

private async checkUserExists(id: string): Promise<User | never> {
    const foundUser = await this.findUser.findById(id);

    if (!foundUser) throw new NotFoundError('User does not exist');
    return foundUser;
}

private async checkEmailExists(email: string): Promise<void | never> {
    const foundEmail = await this.findUserByEmail.findByEmail(email);

    if (!foundEmail) throw new NotFoundError('User does not exist');
}

private async comparePassword(requestModel: UpdateUserBodyRequest, foundUser: User): Promise<void | never> {
    if (requestModel.oldPassword) {
    const compare = await this.passwordHashing.compare(requestModel.oldPassword, foundUser.password_hash);
    if (!compare) throw new RepositoryError('Password is incorrect');
    }
}
}                         
