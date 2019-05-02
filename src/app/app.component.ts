import { Component } from '@angular/core';
import {WebsocketService} from './websocket/websocket.service';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ang-app';
  private serverUrl = 'http://localhost:8080/socket/'
  private stompClient;
  message1:any;
  queue =[];
 

  constructor(


    
  ) {
    /**websocketService.initializeWebsocket();
    console.log('check');
    websocketService.messages.subscribe(message => {
      console.log(message);
    });**/
    
    this.initializeWebSocketConnection();
  }
  initializeWebSocketConnection(){
    
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
   
    this.stompClient.connect({}, function(frame) {
     that.stompClient.subscribe("/chat", (message) => {
    
        if(message.body) {
          console.log("jsdjasdjs");
         /**  $(".chat").append("<div class='message'>" + message.body + "</div>")**/
         /* console.log(message.body);*/
         
         
         that.message1 = message.body ;
         that.queue.push(message.body);
         
         }
        
      });
    });
  }

  // sendMessage(message){
  //   this.stompClient.send("/app/send/message" , {}, message);
  //   $('#input').val('');
  // }
}
