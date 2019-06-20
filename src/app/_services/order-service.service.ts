import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import {OrderParam} from '../_model/orderParam';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = '/params';
  }

  public findAll(): Observable<OrderParam[]> {
    return this.http.get<OrderParam[]>(this.usersUrl);
  }

  public save(orderParam: OrderParam) {
    return this.http.post<OrderParam>(this.usersUrl, orderParam);
  }
}
