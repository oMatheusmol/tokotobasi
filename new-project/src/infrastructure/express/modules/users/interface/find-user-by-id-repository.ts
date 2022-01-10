import { User } from './user-interface';

export interface FindUserByIdRepository {
findById(id: string): Promise<User | null>;
}       
