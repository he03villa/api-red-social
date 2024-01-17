import { Schema, model } from 'mongoose';
import { IPost } from '../interfaces/post';

const postSchema = new Schema<IPost>({
    Title: { type: String, required: true },
    Content: { type: String, required: true },
    Likes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Boolean, default: false },
    userId: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Post = model<IPost>('Post', postSchema);

export default Post;