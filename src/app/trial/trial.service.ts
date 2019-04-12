import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrialService {

  constructor(private  http: HttpClient) {  }
  search1(): Observable <any> {
    return this.http.get('http://localhost:8080/startOrder');
  }
  search2(): Observable <any> {
    return this.http.get('http://localhost:8080/test');
  }

}
