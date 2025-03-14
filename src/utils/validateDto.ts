import { ValidateError } from '@/errors';
import { validate } from 'class-validator';

export async function validateDto(dto: object, trace: string): Promise<void> {
  const errors = await validate(dto);
  if (errors.length > 0) {
    const firstError = errors[0];
    const message = Object.values(firstError.constraints)[0];

    throw new ValidateError(message, trace);
  }
}
