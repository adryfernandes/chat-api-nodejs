import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  res.send({ respost: 'oi' });
});

export { router as userRouter };
