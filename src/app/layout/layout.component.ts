import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../_services/authentication.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(public loginService:AuthenticationService) { }

  ngOnInit() {
  }

}
