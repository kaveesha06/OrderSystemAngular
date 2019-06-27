import { Component, OnInit } from '@angular/core';
import {User} from "../_model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../_services/user-service.service";
import {ResponseService} from "../response/response.service";
import {OrdersperTimeSliceService} from "../_services/ordersper-time-slice.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-gateway-load-test',
  templateUrl: './gateway-load-test.component.html',
  styleUrls: ['./gateway-load-test.component.css']
})
export class GatewayLoadTestComponent implements OnInit {

  user: User;
  users: User[];
  constructor(private route: ActivatedRoute, private userService: UserService, private responseService : ResponseService) {
    this.user = new User();

    this.user.noOfOrders = 100;
    this.user.ip = "192.168.0.50";
    this.user.port = 9080;
    this.user.endpoint = 10;
    this.user.orderQty = 10;

  }
  ngOnInit() {
  }

  onSubmit(){
    // console.log(this.user);
    this.userService.save(this.user).subscribe(()=>{
      this.responseService.connect().subscribe();
    });
  }

}
