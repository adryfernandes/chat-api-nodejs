import mongoose from 'mongoose';

import { MONGODB_URI } from '@/config';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    } as mongoose.ConnectOptions);
  } catch (err) {
    throw new Error(err.message);
  }
};
