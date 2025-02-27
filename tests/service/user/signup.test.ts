import { connectDB, desconnectDB } from '@/database';
import { SignupDto } from '@/database/dto';
import UserRepository from '@/database/repositories/userRepository';
import { UserService } from '@/service/userService';
import { afterAll, beforeAll, describe, expect, it } from '@jest/globals';

describe('Testing Signup', () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await desconnectDB();
  });

  it(`should throw an error if username is not valid`, () => {
    const fieldsToTest = [
      { value: '', message: 'O nome de usuário é obrigatório.' },
      { value: 'jo', message: 'O nome de usuário deve ter no mínimo 3 caracteres.' },
    ];

    fieldsToTest.forEach(async ({ value, message }) => {
      const userMock = new SignupDto({ username: value });
      await expect(UserService.signup(userMock)).rejects.toThrow(message);
    });
  });

  it(`should throw an error if the username already exists`, async () => {
    const userMock = new SignupDto({ username: 'john_doe' });

    const userResult = await UserService.signup(userMock);
    expect(userResult).toBeDefined();

    await expect(UserService.signup(userMock)).rejects.toThrow('Nome de usuário já existe.');

    await new UserRepository().delete({ username: userResult.username });
  });

  it(`in case of success`, async () => {
    const userMock = new SignupDto({ username: 'john_doe' });
    const userResult = await UserService.signup(userMock);

    expect(userResult).toHaveProperty('username');
  });
});
