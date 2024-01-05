// login.component.ts

import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private dataservice:DataService) {}

  login() {
    this.dataservice.login(this.credentials).subscribe(
      (response) => {
        console.log('login successfull');
      },
      (error) => {
        console.log(`the error is ${error}`)
      }
    );
  }
}
