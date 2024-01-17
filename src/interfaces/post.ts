import { Types, Schema } from 'mongoose';
export interface IPost {
    Title: string;
    Content: string;
    Likes: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
    userId: String;
    user: Schema.Types.ObjectId;
}