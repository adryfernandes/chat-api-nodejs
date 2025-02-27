import { SignupDto } from '@/database/dto';
import { UserService } from '@/service/user/userService';
import { Request } from '@/types';
import { HttpStatusCode } from 'axios';
import { NextFunction, Response } from 'express';

export class UserController {
  static async signup(
    req: Request<undefined, undefined, SignupDto>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { body } = req;

      const input = new SignupDto({ username: body?.username });

      await UserService.signup(input);

      res.sendStatus(HttpStatusCode.Ok);
    } catch (error) {
      next(error);
    }
  }
}
