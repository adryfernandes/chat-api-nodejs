import { UserCreateData } from '@/database/models/userModel';

export const userExample: UserCreateData = {
  username: 'john_doe',
  createdAt: new Date(),
};
