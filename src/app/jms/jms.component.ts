import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JmsService} from './jms.service';
import {JMS} from '../_model/jms';
import {FileUploader} from 'ng2-file-upload';


@Component({
  selector: 'app-jms',
  templateUrl: './jms.component.html',
  styleUrls: ['./jms.component.css']
})
export class JMSComponent implements OnInit {
  jms:JMS;
  uploader: FileUploader;
  selectedOption: any = "FormExchange";
  exchange_values: any = ["FromExchange","ToExchange"];

  constructor(private route: ActivatedRoute, private router: Router, private jmsService:JmsService) {
    this.jms = new JMS();
    this.jms.jmsMessage = "TDWL\u001C0\u001C23041\u001C8=FIXT.1.1\u00019=115\u000135=U29\u000134=316\u000152=20171228-08:06:49.594\u000149=998\u000156=080\u000157=M0800001\u00019742=U2815360521\u00019730=0\u00019701=180904000000263\u00019729=1365245876\u0001900=5\u000110=124\u0001";
    this.jms.exchange = "FromExchange";
  }

  ngOnInit(): void {
    const headers = [{name: 'Accept', value: 'application/json'}];
    this.uploader = new FileUploader({url: '/api/files/jms', autoUpload: true, headers: headers});
    this.uploader.onCompleteAll = () => alert('File uploaded');
  }

  onSubmit= function(){
    this.jmsService.save(this.jms).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users/JMS']);
  }

  clear(){
    this.jms.jmsMessage = null;
  }
}
