import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from 'src/app/authentication/authentication.url';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.css']
})
export class AuthNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  AppUrl = AppUrl
  AuthUrl = AuthUrl
}
