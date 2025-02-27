import { Server } from 'socket.io';
import http from 'http';
import { CORS_ORIGIN } from '@/config';
import ChatEvents from './events/chatEvent';
import { Client } from 'socket.io/dist/client';

export const initSocket = (server: http.Server): void => {
  const io = new Server(server, {
    cors: {
      origin: CORS_ORIGIN,
      methods: ['GET', 'POST'],
    },
  });

  const namespaceV1 = io.of('/api/v1');
  namespaceV1.on('connection', (socket) => {
    console.log('conectado', socket.id);

    new ChatEvents(socket);

    socket.on('disconnect', () => {
      console.log(`Disconnected`);
    });
  });
};
