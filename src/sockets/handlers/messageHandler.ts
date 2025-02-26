import { Socket } from 'socket.io';

export const messageHandler = (socket: Socket, data: unknown) => {
  console.log('Mensagem recebida:', data);
  socket.broadcast.emit('message', data);
};
