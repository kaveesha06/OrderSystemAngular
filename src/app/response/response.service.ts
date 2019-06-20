import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,interval,Subscription} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  subscription: Subscription;
 
  constructor(private  http: HttpClient) { 
    const source = interval(1000);
  }

   getReponseCount(): Observable <any> {
    return this.http.get('/ResponseCount');
  }

  getReponseTime(): Observable <any> {
    return this.http.get('/ResponseTime');
 }
   
  order(): Observable <any> {
    return this.http.get('/startOrder');
  }

  getLastHundredResponses(): Observable <any> {
    return this.http.get('/ResponseData');
 }

 connect(): Observable <any> {
    return this.http.get('/connect');
  }



}
