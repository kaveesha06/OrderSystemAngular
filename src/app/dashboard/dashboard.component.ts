import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public loginService:AuthenticationService) { }

  ngOnInit() {
  }

}
