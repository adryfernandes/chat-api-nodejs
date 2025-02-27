import http from 'http';
import { PORT } from './config';
import { createApp } from './app';
import { initSocket } from './sockets';
import { connectDB } from './database';

const startServer = async () => {
  try {
    await connectDB();

    const app = createApp();
    const server = http.createServer(app);

    initSocket(server);

    server.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Servidor iniciado na porta ${PORT}`);
    });
  } catch (error) {
    console.error('[Erro ao iniciar servidor]:', error);
    process.exit(1);
  }
};

startServer();
