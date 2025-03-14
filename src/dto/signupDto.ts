import { Match } from '@/decorators/matchDecorator';
import { IsNotEmpty, MinLength } from 'class-validator';

/**
 * @example {
 *  "username": "john_doe",
 *  "password": "Alterar@123",
 *  "confirmPassword": "Alterar@123"
 * }
 */
export class SignupDto {
  @MinLength(3, { message: 'O nome de usuário deve ter no mínimo 3 caracteres.' })
  @IsNotEmpty({ message: 'O nome de usuário é obrigatório.' })
  username: string;

  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  password: string;

  @Match('password', { message: 'A senha e a confirmação de senha não conferem.' })
  @IsNotEmpty({ message: 'A confirmação de senha é obrigatória.' })
  confirmPassword: string;

  constructor({ username, password, confirmPassword }: SignupDto) {
    this.username = username?.trim()?.toLowerCase();
    this.password = password?.trim();
    this.confirmPassword = confirmPassword?.trim();
  }
}
