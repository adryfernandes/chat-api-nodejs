// models/message.model.ts
import mongoose from 'mongoose';

export interface IMessageInput {
  content: string;
  sender: string;
  receiver: string;
}

export interface IMessage extends IMessageInput, mongoose.Document {
  createdAt: Date;
  read: boolean;
}

const messageSchema = new mongoose.Schema<IMessage>({
  content: { type: String, required: true },
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  read: { type: Boolean, default: false },
});

export default mongoose.model<IMessage>('Message', messageSchema);
