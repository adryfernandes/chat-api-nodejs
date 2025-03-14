/* eslint-disable no-await-in-loop */
import { connectDB, desconnectDB } from '@/database';
import { SignupDto } from '@/dto';
import { UserService } from '@/service/userService';
import { afterAll, beforeAll, describe, expect, it } from '@jest/globals';

describe('Testing Signup DTO Validations', () => {
  beforeAll(async () => {
    await connectDB();
  });
  afterAll(async () => {
    await desconnectDB();
  });

  it('should throw validation errors for invalid usernames', async () => {
    const testCases = [
      {
        dtoData: { username: '', password: 'Valid123!', confirmPassword: 'Valid123!' },
        errorMessage: 'O nome de usuário é obrigatório.',
      },
      {
        dtoData: { username: 'jo', password: 'Valid123!', confirmPassword: 'Valid123!' },
        errorMessage: 'O nome de usuário deve ter no mínimo 3 caracteres.',
      },
    ];
    for (const testCase of testCases) {
      const signupDto = new SignupDto(testCase.dtoData);
      await expect(UserService.signup(signupDto)).rejects.toThrow(testCase.errorMessage);
    }
  });

  it('should throw an error if the password is missing', async () => {
    const signupDto = new SignupDto({ username: 'john_doe', password: '', confirmPassword: '' });
    await expect(UserService.signup(signupDto)).rejects.toThrow('A senha é obrigatória.');
  });

  it('should throw an error if the confirmPassword is missing', async () => {
    const signupDto = new SignupDto({
      username: 'john_doe',
      password: 'Valid123!',
      confirmPassword: '',
    });
    await expect(UserService.signup(signupDto)).rejects.toThrow(
      'A confirmação de senha é obrigatória.'
    );
  });

  it('should throw an error if password and confirmPassword do not match', async () => {
    const signupDto = new SignupDto({
      username: 'john_doe',
      password: 'Valid123!',
      confirmPassword: 'Mismatch123!',
    });
    await expect(UserService.signup(signupDto)).rejects.toThrow(
      'A senha e a confirmação de senha não conferem.'
    );
  });
});
