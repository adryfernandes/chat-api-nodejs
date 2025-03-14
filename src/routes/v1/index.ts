import { Router } from 'express';
import { userRouter } from './userRouter';

const router = Router();

router.use('/user', userRouter);

export { router as routerV1 };
