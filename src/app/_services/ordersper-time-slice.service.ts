import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrdersPerTimeSlice} from '../_model/OrdersPerTimeSlice';

@Injectable({
  providedIn: 'root'
})
export class OrdersperTimeSliceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = '/ordersPerTimeSlice';
  }

  public findAll(): Observable<OrdersPerTimeSlice[]> {
    return this.http.get<OrdersPerTimeSlice[]>(this.usersUrl);
  }

  public save(ordersPerTimeSlice:OrdersPerTimeSlice) {
    return this.http.post<OrdersPerTimeSlice>(this.usersUrl, ordersPerTimeSlice);
  }
}
