import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor() { }

  authenticate(username, password) {
    if ((username === "user1" && password === "password")|| (username === "admin" && password === "mubasher")) {
      localStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let client = localStorage.getItem('username')
   // console.log(!(client === null))
    return !(client === null)
  }

  logOut() {
    localStorage.removeItem('username')
  }
}
