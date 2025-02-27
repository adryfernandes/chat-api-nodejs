import UserController from '@/controller/user/userController';
import { Router } from 'express';

const router = Router();

router.post('/signup', UserController.signup);

export { router as userRouter };
