import { Component } from '@angular/core';
import {ResponseService} from './response/response.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ang-app';
  constructor(private responseService:ResponseService) {
    // this.responseService.connect().subscribe();
  }

  /** async getLastThousandResponses(){
  while(1){
    let size =this.queue.length;
   
    if(size>1000){
      let start =size - 1000;
      for(var i=0;i<=1000;i++){
        this.modifiedQueue.push(this.queue[start+i]);
      }
     
    }
    delay(1000);
  }
}*/
  // sendMessage(message){
  //   this.stompClient.send("/app/send/message" , {}, message);
  //   $('#input').val('');
  // }
}
