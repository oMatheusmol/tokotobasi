import { User } from '../../modules/users/interface/user-interface';

export type UserWithRoles = User & {
role_id: string;
role_name: string;
role_description?: string;
};
