import { IsNotEmpty, MinLength } from 'class-validator';

/**
 * @example {
 *  "username": "john_doe"
 * }
 */
export class SignupDto {
  @MinLength(3, { message: 'O nome de usuário deve ter no mínimo 3 caracteres.' })
  @IsNotEmpty({ message: 'O nome de usuário é obrigatório.' })
  username: string;

  constructor({ username }) {
    this.username = username?.trim()?.toLowerCase();
  }
}
