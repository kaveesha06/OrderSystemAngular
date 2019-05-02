import { Component, OnInit } from '@angular/core';
import {TrialService} from '../trial/trial.service';
import {WebsocketService} from './websocket.service';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css']
})
export class WebsocketComponent implements OnInit {

  constructor(private websocketService: WebsocketService) {
  }

  ngOnInit() {
  }

  connectSocket() {
    this.websocketService.messages.subscribe(message => {
      console.log('okay');
      console.log(message);
    });
  }
}
