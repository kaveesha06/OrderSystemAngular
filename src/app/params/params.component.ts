import { Component, OnInit } from '@angular/core';
import {OrderParam} from '../_model/orderParam';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderServiceService} from '../_services/order-service.service';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {
  orderParam : OrderParam ;

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderServiceService) {
    this.orderParam = new OrderParam();
    //this.orderParam.unReqId = 1011;

    this.orderParam.tenantCode ="DEFAULT_TENANT";
    this.orderParam.symbol = "1010";
    this.orderParam.exchange ='TDWL';
    this.orderParam.price = 5.0;
    this.orderParam.orderChannel =12;
    this.orderParam.marketCode = "ALL";
    this.orderParam.type =2;
    this.orderParam.side = 1;
    this.orderParam.orderMode = 0;
    this.orderParam.dealerID ='1';
  }

  ngOnInit() {
    this.onSubmit();
  }
  onSubmit= function(){
    this.orderService.save(this.orderParam).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
