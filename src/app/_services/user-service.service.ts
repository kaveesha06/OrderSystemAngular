import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import {User} from '../_model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {GatewayUser} from "../gateway-load-test/gateway-load-test.component";



@Injectable()
export class UserService {

  private usersUrl: string;
  private gwUsersUrl: string;


  constructor(private http: HttpClient, private router: Router) {
    this.usersUrl = 'http://localhost:8095'+'/users/home';
    this.gwUsersUrl = 'http://localhost:8095'+'/users/home/gw';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public saveGwUser(gwUser: GatewayUser) {
    return this.http.post<GatewayUser>(this.gwUsersUrl, gwUser);
  }

  public gotoUserList() {
    this.router.navigate(['/users/home']);
  }
}
