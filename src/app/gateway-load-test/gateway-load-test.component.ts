import { Component, OnInit } from '@angular/core';
import {User} from "../_model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../_services/user-service.service";
import {ResponseService} from "../response/response.service";
import {timeout} from "rxjs/operators";

@Component({
  selector: 'app-gateway-load-test',
  templateUrl: './gateway-load-test.component.html',
  styleUrls: ['./gateway-load-test.component.css']
})
export class GatewayLoadTestComponent implements OnInit {

  gwUser: GatewayUser;
  gwUsers: GatewayUser[];
  options:any;
  optionsMap:any;
  referenceMap:any;
  optionsMapIndex:any;


  constructor(private route: ActivatedRoute, private userService: UserService, private responseService : ResponseService) {
    this.gwUser = new GatewayUser();

    this.gwUser.ip = "192.168.0.50";
    this.gwUser.port = 9080;
    this.gwUser.endpoint = 1;
    this.gwUser.repeatCount = 1;
    this.gwUser.sendFileContent = true;
    this.gwUser.requestsPerSec = 0;
    this.gwUser.timeConstraintMin = 60;
    this.gwUser.isRated = false;
    this.gwUser.isTimeBounded = true;
    this.gwUser.msgCount = 1000;
    this.gwUser.isCountEnabled = false;

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
    this.userService.saveGwUser(this.gwUser).subscribe(()=>{
      console.log(this.gwUser);
      // this.responseService.connect(this.isGWClient).subscribe();
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

  toggleSendFileContent(e){
    this.gwUser.sendFileContent = e.target.checked;
  }

  toggleTimeBound(e){
    this.gwUser.isTimeBounded = e.target.checked;
    this.gwUser.isCountEnabled = !(e.target.checked);
  }

  toggleReqRate(e){
    this.gwUser.isRated = e.target.checked;
  }

  toggleMsgCount(e){
    this.gwUser.isTimeBounded = !(e.target.checked);
    this.gwUser.isCountEnabled = e.target.checked;
  }


}

export class GatewayUser{
  ip:string;
  port:number;
  endpoint:number;
  repeatCount:number;
  sendFileContent:boolean;
  isTimeBounded:boolean;
  isRated:boolean;
  isCountEnabled:boolean;
  requestsPerSec:number;
  timeConstraintMin:number
  msgCount:number;
}
