import { Socket } from 'socket.io';

export default class ChatEvents {
  constructor(private socket: Socket) {
    this.registerEvents();
  }

  private registerEvents() {
    this.socket.on('chat message', this.handleMessageSend);
  }

  private handleMessageSend(message) {
    this.socket.emit(message);
  }
}
