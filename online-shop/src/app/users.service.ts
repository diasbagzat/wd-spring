import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {LoginResponse} from "./models";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BASE_URL = 'http://127.0.0.1:8000';


  private UserName = new BehaviorSubject<string>(localStorage.getItem('username'));
  private isAdmin = new BehaviorSubject<boolean>(this.checkAdmin());


  constructor(private http: HttpClient, private router: Router) { }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    }).pipe(
      map(res =>{
        if (res && res.token) {
          localStorage.setItem('jwt', res.token);
          localStorage.setItem('username', res.username);
          localStorage.setItem('isSuper', JSON.stringify(res.is_superuser));
          localStorage.setItem('userid', String(res.userid));
          this.router.navigate(['/main']);
          this.isAdmin.next(JSON.parse(localStorage.getItem('isSuper')));
          this.UserName.next(localStorage.getItem('username'));
         // this.UserId.next(localStorage.getItem('userid'));
        }
        return res;
      })
    );
  }

  logout() {
    localStorage.clear();
    console.log("Logged Out Successfully");
  }

  checkAdmin(): boolean {
    var status = localStorage.getItem("isSuper");
    var value = JSON.parse(status);
    console.log(value + Date.now());
    if (value == true) {
      if (localStorage.getItem('isSuper') === null || localStorage.getItem('isSuper') === undefined) {
        return false;
      }
      return true
    }
    return false
  }


}
