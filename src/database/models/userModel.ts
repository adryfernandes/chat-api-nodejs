// models/message.model.ts
import mongoose from 'mongoose';

export interface UserCreateData {
  username: string;
  createdAt?: Date;
}

export interface UserDocument extends UserCreateData, mongoose.Document {}

const userSchema = new mongoose.Schema<UserDocument>({
  username: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<UserDocument>('User', userSchema);
