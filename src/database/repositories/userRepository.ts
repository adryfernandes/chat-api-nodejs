import { RootFilterQuery } from 'mongoose';
import User, { UserDocument, UserCreateData } from '../models/userModel';

export default class UserRepository {
  create(data: Partial<UserDocument>): Promise<UserCreateData> {
    return User.create(data);
  }

  exist(filter: RootFilterQuery<UserDocument>) {
    return User.exists(filter);
  }

  delete(filter: RootFilterQuery<UserDocument>) {
    return User.deleteOne(filter);
  }
}
