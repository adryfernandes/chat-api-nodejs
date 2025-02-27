import { IsNotEmpty, MinLength } from 'class-validator';

/**
 * @example {
 *  "username": "john_doe"
 * }
 */
export class SignupDto {
  @IsNotEmpty({ message: 'O username é obrigatório.' })
  @MinLength(3, { message: 'O username deve ter no mínimo 3 caracteres.' })
  username: string;

  constructor({ username }) {
    this.username = username?.trim()?.toLowerCase();
  }
}
