import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AmendOrder} from '../_model/AmendOrder';
import {CancelOrder} from '../_model/CancelOrder';


@Injectable({
  providedIn: 'root'
})
export class AmendOrderService {
  private amendOrdersUrl : string;
  private cancelOrdersURL : string;
  constructor(private http: HttpClient, private router: Router) {
    this.amendOrdersUrl = '/amendOrder';
    this.cancelOrdersURL = '/cancelOrder';
  }

  public save(amendOrder: AmendOrder) {
    return this.http.post<AmendOrder>(this.amendOrdersUrl, amendOrder);
  }
  public saveCancel(cancelOrder: CancelOrder) {
    return this.http.post<CancelOrder>(this.cancelOrdersURL, cancelOrder);
  }

}
