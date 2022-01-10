import { User } from './user-interface';

export interface FindUserByIdUseCase {
findById(id: string): Promise<User | never>;
}      
