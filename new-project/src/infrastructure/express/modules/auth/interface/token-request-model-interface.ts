import { Token } from './token-interface';

export type TokenRequestModel = Omit<Token, 'id'>;
