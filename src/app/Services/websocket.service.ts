import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  connect(){
    const socket = io('http://127.0.0.1:3333')
      socket.on('news', (data) => {
        console.log(data);
        socket.emit('my other event', 'Hello from Angular');
      })
  }
}
