import { Router } from 'express';
import { userRouter } from './userRouter';

const router = Router();

router.get('/health', (_, res) => {
  res.status(200).json({ status: 'ok' });
});

router.use('/user', userRouter);

export { router as routerV1 };
