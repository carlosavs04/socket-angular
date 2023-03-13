import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './Services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private websocketService: WebsocketService) { }

  ngOnInit(): void {
    this.websocketService.connect();
  }

  title = 'socket-angular';
}
