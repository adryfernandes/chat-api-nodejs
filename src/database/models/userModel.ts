// models/message.model.ts
import mongoose from 'mongoose';

export interface IUserInput {
  username: string;
  createdAt: Date;
}

export interface IUser extends IUserInput, mongoose.Document {
  username: string;
  createdAt: Date;
}

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IUser>('User', userSchema);
