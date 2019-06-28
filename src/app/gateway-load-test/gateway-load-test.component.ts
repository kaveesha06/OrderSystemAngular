import { Component, OnInit } from '@angular/core';
import {User} from "../_model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../_services/user-service.service";
import {ResponseService} from "../response/response.service";

@Component({
  selector: 'app-gateway-load-test',
  templateUrl: './gateway-load-test.component.html',
  styleUrls: ['./gateway-load-test.component.css']
})
export class GatewayLoadTestComponent implements OnInit {

  user: User;
  users: User[];
  options:any;
  optionsMap:any;
  referenceMap:any;
  optionsMapIndex:any;
  isGWClient:boolean = true;


  constructor(private route: ActivatedRoute, private userService: UserService, private responseService : ResponseService) {
    this.user = new User();

    this.user.noOfOrders = 100;
    this.user.ip = "192.168.0.50";
    this.user.port = 9080;
    this.user.endpoint = 10;
    this.user.orderQty = 10;

    this.options = ["Login","Buying Power","Account Summary","Order List","Order Search","Customer Search","Portfolio Details"];
    this.optionsMap = {"Login":false,"Buying Power":false,"Account Summary":false,"Order List":false,"Order Search":false,
      "Customer Search":false,"Portfolio Details":false};
    this.referenceMap = {"Login":1,"Buying Power":2,"Account Summary":3,"Order List":4,"Order Search":5,"Customer Search":6,"Portfolio Details":7};
    this.optionsMapIndex = {1:false,2:false,3:false,4:false,5:false,6:false,7:false};


  }

  ngOnInit() {
    this.initOptionsMap();
  }

  initOptionsMap() {
    for (let option in this.options) {
      this.optionsMap[this.options[option]] = false;
    }
  }

  onSubmit(){
    // console.log(this.user);
    this.userService.save(this.user).subscribe(()=>{
      this.responseService.connect(this.isGWClient).subscribe();
    });
  }

  sendReq(){
    this.updateOptions();
    console.log(this.optionsMapIndex);
    this.responseService.sendGWMsgType(this.optionsMapIndex).subscribe();
    this.optionsMapIndex = {1:false,2:false,3:false,4:false,5:false,6:false,7:false};
  }

  updateOptions() {
    for(let option in this.optionsMap) {
      if(this.optionsMap[option]) {
        this.optionsMapIndex[this.referenceMap[option]]=true;
      }
    }
  }

  updateCheckedOptions(option, event) {
    this.optionsMap[option] = event.target.checked;
  }




}
