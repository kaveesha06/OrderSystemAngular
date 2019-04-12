import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = '127.0.0.1:8080';

  constructor(private httpClient: HttpClient) {}
}
