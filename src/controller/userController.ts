import { SignupDto } from '@/dto';
import { UserService } from '@/service/userService';
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
      const input = new SignupDto({
        username: body?.username,
        password: body?.password,
        confirmPassword: body?.confirmPassword,
      });

      const user = await UserService.signup(input);

      // res.cookie('auth', token, {
      //   secure: process.env.NODE_ENV !== 'development',
      //   httpOnly: true,
      //   expires: dayjs().add(30, 'days').toDate(),
      //   sameSite: 'lax',
      // });

      res.status(HttpStatusCode.Ok).send(user);
    } catch (error) {
      next(error);
    }
  }
}
