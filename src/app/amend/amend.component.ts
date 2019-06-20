import { Component, OnInit } from '@angular/core';
import {AmendOrder} from '../_model/AmendOrder';
import {AmendOrderService} from './amend-order.service';
import {Router} from '@angular/router';
import {ResponseService} from '../response/response.service';
import {Subscription, timer} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {CancelOrder} from '../_model/CancelOrder';

@Component({
  selector: 'app-amend',
  templateUrl: './amend.component.html',
  styleUrls: ['./amend.component.css']
})
export class AmendComponent implements OnInit {
  amendOrder : AmendOrder;
  cancelOrder : CancelOrder;
  messages =[];
  subscription2: Subscription;
  constructor(private amendOrderService:AmendOrderService, private router: Router, private responseService: ResponseService) {
    this.amendOrder = new AmendOrder();
    this.cancelOrder = new CancelOrder();
  }

  ngOnInit() {
  }
  onSubmit= function(){
    this.amendOrderService.save(this.amendOrder).subscribe(result => this.gotoUserList());
  }
  onCancel= function(){
    this.amendOrderService.saveCancel(this.cancelOrder).subscribe(result => this.gotoUserList());
  }
  gotoUserList() {
    this.router.navigate(['/Amend']);
  }

  order(){
    this.responseService.order().subscribe(params => {


    });
    this.subscription2 = timer(0, 1000).pipe(
      switchMap(() => this.responseService.getLastHundredResponses())
    ).subscribe( data =>{
      this.messages =[];
      for(let i=0;i< 50;i++){
        this.messages.push(data[i]);
      }
    });
  }
}

