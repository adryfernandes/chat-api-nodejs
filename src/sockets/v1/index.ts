import { Namespace } from 'socket.io';
import { registerChatHandlers } from './chatHandlers';

export const registerV1Handlers = (namespace: Namespace) => {
  namespace.on('connection', (socket) => {
    console.log('Novo cliente conectado na versão 1:', socket.id);

    registerChatHandlers(socket);

    socket.on('disconnect', () => {
      console.log('Cliente desconectado:', socket.id);
    });
  });
};
