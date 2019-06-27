import { Component,ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user-service.service';
import { User } from '../_model/user';
import {ResponseService} from '../response/response.service';
import {HttpClient, HttpHeaders, HttpParams,HttpEventType} from '@angular/common/http';
import {FileUploader} from 'ng2-file-upload';
import {OrdersPerTimeSlice} from '../_model/OrdersPerTimeSlice';
import {OrdersperTimeSliceService} from '../_services/ordersper-time-slice.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  uploader: FileUploader;
  user: User;
  users: User[];
  ordersPerTimeSlice : OrdersPerTimeSlice;


  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService,
              private responseService: ResponseService, private ordersPerTimeSliceService : OrdersperTimeSliceService,
              private http: HttpClient) {
    this.user = new User();
    this.ordersPerTimeSlice = new OrdersPerTimeSlice();
    // this.user.ip = "192.168.0.50";
    // this.user.port = 8181;
    // this.user.endpoint = 10;
    // this.user.noOfOrders = 100;
    // this.user.orderQty = 1;

    this.userService.findAll().subscribe(data => {
      this.users = data;

      this.user.noOfOrders = this.users[this.users.length-1].noOfOrders;
      this.user.ip = this.users[this.users.length-1].ip;
      this.user.port = this.users[this.users.length-1].port;
      this.user.endpoint = this.users[this.users.length-1].endpoint;
      this.user.orderQty = this.users[this.users.length-1].orderQty;
      // this.user.isGWClient = this.users[this.users.length-1].isGWClient;
      this.ordersPerTimeSlice.timePeriod = 1;
      this.ordersPerTimeSlice.orderPerSlice = 700;

    });

  }

  ngOnInit(): void {
    const headers = [{name: 'Accept', value: 'application/json'}];
    this.uploader = new FileUploader({url: '/api/files', autoUpload: true, headers: headers});
    this.uploader.onCompleteAll = () => alert('File uploaded');
  }

  onSubmit= function(){
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users/home']);
  }

  onSubmitOrdersPerTimeSlice= function(){
    console.log(this.ordersPerTimeSlice.GWClient);
    this.ordersPerTimeSliceService.save(this.ordersPerTimeSlice).subscribe(result => this.gotoUserList());

  }
}
