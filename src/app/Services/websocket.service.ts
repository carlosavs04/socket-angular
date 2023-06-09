import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socket = io('http://localhost:3333');

  constructor() { }

  connect(){
      this.socket.on('news', (data) => {
        console.log(data);
        this.socket.emit('my other event', 'Hello from Angular');
      })
  }
}
