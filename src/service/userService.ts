import { SignupDto } from '@/dto';
import { Repository, UserDocument, UserModel } from 'models';
import { NotFoundError, UnauthorizedError, ValidateError } from '@/errors';
import { userExample } from '@/swagger/userExample';
import { validateDto } from '@/utils/validateDto';
import { HttpStatusCode } from 'axios';
import { Body, Example, OperationId, Post, Response, Route, SuccessResponse, Tags } from 'tsoa';

@Route('/user')
@Tags('Usuário')
export class UserService {
  private static userRepository = new Repository<UserDocument>(UserModel);

  @Post('/signup')
  @OperationId('signup')
  @SuccessResponse(HttpStatusCode.Ok, 'Ok')
  @Example<UserDocument>(userExample)
  @Response<ValidateError>(HttpStatusCode.BadRequest, 'Bad Request')
  @Response<UnauthorizedError>(HttpStatusCode.Unauthorized, 'Unauthorized')
  @Response<NotFoundError>(HttpStatusCode.NotFound, 'Not Found')
  static async signup(@Body() input: SignupDto): Promise<UserDocument> {
    await validateDto(input, 'ERRXXX');

    const userExist = await this.userRepository.exist({ username: input.username });
    if (userExist) {
      throw new ValidateError('Nome de usuário já existe.', 'ERRXXX');
    }

    return await this.userRepository.create(input);
  }
}
