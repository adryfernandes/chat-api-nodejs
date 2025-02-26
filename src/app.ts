import express, { Express } from 'express';
import cors from 'cors';
import { router } from './routes';
import { CORS_ORIGIN } from './config/config';

export const createApp = (): Express => {
  const app = express();

  app.use(express.json());
  app.use(cors({ origin: CORS_ORIGIN }));
  app.use('/api', router);

  return app;
};
