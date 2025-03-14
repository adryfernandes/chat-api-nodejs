import { CORS_ORIGIN, PORT } from './config';
import { connectDB } from './database';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import swaggerDocument from '../public/swagger.json';
import swaggerUi from 'swagger-ui-express';
import { errorHandlerMiddleware } from './middleware/errorHandlerMiddleware';

const startServer = async () => {
  try {
    await connectDB();

    const app = express();

    app.use(express.json());
    app.use(cors({ origin: CORS_ORIGIN }));

    app.use('/api', router);
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    app.use(errorHandlerMiddleware);

    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Servidor iniciado na porta ${PORT}`);
    });
  } catch (error) {
    console.error('[Erro ao iniciar servidor]:', error);
    process.exit(1);
  }
};

startServer();
