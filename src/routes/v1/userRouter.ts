import { UserController } from '@/controller/userController';
import { Router } from 'express';

const router = Router();

router.post('/signup', UserController.signup);

export { router as userRouter };
