import { SignupDto } from '@/database/dto/signupDto';
import { UserCreateData } from '@/database/models/userModel';
import UserRepository from '@/database/repositories/userRepository';
import { NotFoundError, UnauthorizedError, ValidateError } from '@/errors';
import { userExample } from '@/swagger/userExample';
import { validateDto } from '@/utils/validates';
import { HttpStatusCode } from 'axios';
import { Body, Example, OperationId, Post, Response, Route, SuccessResponse, Tags } from 'tsoa';

@Route('/user')
@Tags('Usuário')
export class UserService {
  private static userRepository = new UserRepository();

  @Post('/signup')
  @OperationId('signup')
  @SuccessResponse(HttpStatusCode.Ok, 'Ok')
  @Example<UserCreateData>(userExample)
  @Response<ValidateError>(HttpStatusCode.BadRequest, 'Bad Request')
  @Response<UnauthorizedError>(HttpStatusCode.Unauthorized, 'Unauthorized')
  @Response<NotFoundError>(HttpStatusCode.NotFound, 'Not Found')
  static async signup(@Body() input: SignupDto) {
    await validateDto(input, 'ERRXXX');

    return await this.userRepository.create(input);
  }
}
