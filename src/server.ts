import { PORT } from './config/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';

const startServer = () => {
  try {
    const app = express();

    app.use(express.json());
    app.use(cors());

    app.use('/api', router);

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
