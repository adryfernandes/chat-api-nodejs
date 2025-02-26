import { Socket } from 'socket.io';

export const registerChatHandlers = (socket: Socket) => {
  socket.on('message', (data: unknown) => {
    console.log('Mensagem recebida:', data);
    socket.emit('message', data);
  });

  socket.on('joinRoom', (room: string) => {
    console.log(`Cliente ${socket.id} entrou na sala ${room}`);
    socket.join(room);
  });

  socket.on('leaveRoom', (room: string) => {
    console.log(`Cliente ${socket.id} saiu da sala ${room}`);
    socket.leave(room);
  });
};
