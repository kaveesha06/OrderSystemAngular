import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderParam} from '../_model/orderParam';
import {JMS} from '../_model/jms';

@Injectable({
  providedIn: 'root'
})
export class JmsService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = '/jmsSend';
  }

  public findAll(): Observable<JMS[]> {
    return this.http.get<JMS[]>(this.usersUrl);
  }

  public save(jms:JMS) {
    return this.http.post<JMS>(this.usersUrl, jms);
  }
}
