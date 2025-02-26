import { Socket } from 'socket.io';
import { messageHandler } from '../handlers/messageHandler';

export const connectionEvent = (socket: Socket) => {
  console.log('Novo cliente conectado:', socket.id);

  socket.on('message', (data) => {
    console.log('Mensagem recebida:', data);
    messageHandler(socket, data);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
};
