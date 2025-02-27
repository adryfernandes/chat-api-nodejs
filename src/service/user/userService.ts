import { NotFoundError, UnauthorizedError } from '@/errors';
import { Signup } from '@/interface/request';
import { HttpStatusCode } from 'axios';
import {
  Body,
  OperationId,
  Post,
  Response,
  Route,
  SuccessResponse,
  Tags,
  ValidateError,
} from 'tsoa';

@Route('/user')
@Tags('Usuário')
export class UserService {
  @Post('/signup')
  @OperationId('signup')
  @SuccessResponse(HttpStatusCode.Ok, 'Ok')
  @Response<ValidateError>(HttpStatusCode.BadRequest, 'Bad Request')
  @Response<UnauthorizedError>(HttpStatusCode.Unauthorized, 'Unauthorized')
  @Response<NotFoundError>(HttpStatusCode.NotFound, 'Not Found')
   signup(@Body() input: Signup) {
    // const user = new User
  }
}
