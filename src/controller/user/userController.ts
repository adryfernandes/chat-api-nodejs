import { Request } from '@/interface';
import { Signup } from '@/interface/request';
import { NextFunction, Response } from 'express';

class UserController {
  signup(req: Request<undefined, undefined, Signup>, res: Response, next: NextFunction) {
    try {
      const { body } = req;

      const input: Signup = {
        username: body?.username?.trim()?.toLowerCase(),
      };
    } catch (error) {
      next(error);
    }
  }
}
export default new UserController();
