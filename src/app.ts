import express, { Express } from 'express';
import cors from 'cors';
import { router } from './routes';
import { CORS_ORIGIN } from './config';
import swaggerDocument from '../public/swagger.json';
import swaggerUi from 'swagger-ui-express';
import { errorHandlerMiddleware } from './middleware/errorHandlerMiddleware';

export const createApp = (): Express => {
  const app = express();

  app.use(express.json());
  app.use(cors({ origin: CORS_ORIGIN }));

  app.use('/api', router);
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.use(errorHandlerMiddleware);

  return app;
};
