export interface UpdateUserBodyRequest {
email: string;
name: string;
password: string;
confirmPassword: string;
oldPassword: string;
password_hash?: string;
}
