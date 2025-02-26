import { Server } from 'socket.io';
import http from 'http';
import { CORS_ORIGIN } from '@/config/config';
import { connectionEvent } from './events/onConnection';

export const initSocket = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: CORS_ORIGIN,
      methods: ['GET', 'POST'],
    },
  });

  const namespaceV1 = io.of('/api/v1');
  namespaceV1.on('connection', connectionEvent);

  return io;
};
