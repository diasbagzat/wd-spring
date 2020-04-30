import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  logged = false;

  username = '';
  password = '';

  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  login() {
    this.userService.login(this.username, this.password)
        .subscribe(res => {
          localStorage.setItem('token', res.token);

          this.logged = true;
  
          this.username = '';
          this.password = '';
        })
  }

  logout() {
    localStorage.clear();
    this.logged = false;
  }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

}
