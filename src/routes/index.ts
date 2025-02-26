import { Router } from 'express';
import { routerV1 } from './v1/intex';

const router = Router();

router.get('/health', (_, res) => {
  res.status(200).json({ status: 'ok' });
});

router.use('/v1', routerV1);

export { router };
