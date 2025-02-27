import User, { UserDocument, UserCreateData } from '../models/userModel';

export default class UserRepository {
  create(data: Partial<UserDocument>): Promise<UserCreateData> {
    return User.create(data);
  }
}
