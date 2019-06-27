import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,interval,Subscription} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  subscription: Subscription;
  urlPrefix = "http://localhost:8095";
 
  constructor(private  http: HttpClient) { 
    const source = interval(1000);
  }

   getReponseCount(): Observable <any> {
    return this.http.get(this.urlPrefix+'/ResponseCount');
  }

  getReponseTime(): Observable <any> {
    return this.http.get(this.urlPrefix+'/ResponseTime');
 }
   
  order(): Observable <any> {
    return this.http.get(this.urlPrefix+'/startOrder');
  }

  getLastHundredResponses(): Observable <any> {
    return this.http.get(this.urlPrefix+'/ResponseData');
 }

 connect(): Observable <any> {
    return this.http.get(this.urlPrefix+'/connect');
  }

  stop(): Observable <any> {
    return this.http.get(this.urlPrefix+'/stop');
  }

  sendTimedOrders():Observable <any> {
    return this.http.get(this.urlPrefix+'/sendTimedOrders');
  }
  sendConventionalOrders():Observable <any> {
    return this.http.get(this.urlPrefix+'/sendConventionalOrders');
  }


}
