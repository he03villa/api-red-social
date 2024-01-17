export interface IUser {
    FullName: string;
    Age: number;
    Email: string;
    Password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
    token: String;
}