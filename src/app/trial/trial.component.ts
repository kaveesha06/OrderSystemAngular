import { Component, OnInit } from '@angular/core';
import {TrialService} from './trial.service';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {

  constructor(private trialservice: TrialService) {}

  ngOnInit() {

  }

  search() {
    this.trialservice.search1().subscribe(params => {
      console.log(params);
    });

  }
  search_new() {
    this.trialservice.search1().subscribe(data => {
      console.log(data);
    });

  }
}




