import { AppComponent } from '../app.component';
import {Component, OnInit, Directive, Input, ViewChild} from '@angular/core';
import { ResponseService } from './response.service';
import { timer, Observable, Subject,Subscription,pipe } from 'rxjs';
import { switchMap, takeUntil, catchError } from 'rxjs/operators';
import { User } from '../_model/user';
import { UserService } from '../_services/user-service.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  user : User;
  users: User[];
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  statusText: string;
  responseCount : number;
  responseTime : any;
  totalNoOfOrders : number;
  percentage : any;
  messages =[];
  responseCountArray = [];
  columnDefs = [
    {headerName: 'Response', field: 'response'}
    
  ];
  
  rowData : any;
  private fetchData$: Observable<string> = this.responseService.getReponseCount();
  
  constructor(private responseService:ResponseService,private userService: UserService) {
    //this.getResponseCount();
    this.user = new User();

  }

  ngOnInit() {
    this.responseCountArray =[];
    this.responseCount = 0;
    this.responseTime = 0;
    this.totalNoOfOrders  = 0;
    this.userService.findAll().subscribe(data => {
      this.users = data;

      this.totalNoOfOrders = this.users[this.users.length-1].noOfOrders;

    });
    this.subscription1 = timer(0, 200).pipe(
      switchMap(() => this.responseService.getReponseCount())
    ).subscribe( data =>{
      this.responseCount = data;
      this.percentage = (this.responseCount / this.totalNoOfOrders)*100;
      if(this.responseCountArray.length < 12){
        this.responseCountArray.push(this.responseCount);
      }
      else{
        this.responseCountArray.splice(0,1);
        this.responseCountArray.push(this.responseCount);
      }
      if(this.responseCountArray[0] == this.responseCountArray[10] || this.responseCountArray[10] == this.totalNoOfOrders){

        // this.subscription1.unsubscribe();
        // this.subscription2.unsubscribe();
        // this.subscription3.unsubscribe();
      }
    });

    this.subscription2 = timer(0, 1000).pipe(
      switchMap(() => this.responseService.getLastHundredResponses())
    ).subscribe( data =>{

      this.messages =[];
      for(let i=0;i< 50;i++){
        this.messages.push(data[i]);
      }

    });

    this.subscription3 = timer(0, 1000).pipe(
      switchMap(() => this.responseService.getReponseTime())
    ).subscribe( data =>{
      if(this.responseCount == 0){
        this.responseTime = 0;
      }
      this.responseTime = data[this.responseCount-1]/1000;
    });


  }

  

  order() {

    this.responseCountArray =[];
    this.responseCount = 0;
    this.responseTime = 0;
    this.userService.findAll().subscribe(data => {
      this.users = data;
      
      this.totalNoOfOrders = this.users[this.users.length-1].noOfOrders;

    });
    this.responseService.order().subscribe(params => {
      
      // this.populateRowData();
    });
    this.subscription1 = timer(0, 200).pipe(
      switchMap(() => this.responseService.getReponseCount())
    ).subscribe( data =>{
      this.responseCount = data;
      this.percentage = (this.responseCount / this.totalNoOfOrders)*100;
      if(this.responseCountArray.length < 12){
        this.responseCountArray.push(this.responseCount);
      }
      else{
        this.responseCountArray.splice(0,1);
        this.responseCountArray.push(this.responseCount);
      }
     if(this.responseCountArray[0] == this.responseCountArray[10] || this.responseCountArray[10] == this.totalNoOfOrders){

      // this.subscription1.unsubscribe();
      // this.subscription2.unsubscribe();
      // this.subscription3.unsubscribe();
      }
    });

    this.subscription2 = timer(0, 1000).pipe(
      switchMap(() => this.responseService.getLastHundredResponses())
    ).subscribe( data =>{

      this.messages =[];
      for(let i=0;i< 50;i++){
        this.messages.push(data[i]);
      }

    });

    this.subscription3 = timer(0, 1000).pipe(
      switchMap(() => this.responseService.getReponseTime())
    ).subscribe( data =>{
      if(this.responseCount == 0){
        this.responseTime = 0;
      }
      this.responseTime = data[this.responseCount-1]/1000;
      });
    }


    clear(){
    this.messages = null;
    this.subscription2.unsubscribe();
  }

  connect(){
    this.responseService.connect().subscribe();
  }
}
