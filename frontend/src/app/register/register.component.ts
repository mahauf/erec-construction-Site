// registration.component.ts

import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  user = { username: '', password: '' };

  constructor(private dataservice : DataService) {}

  register() {
    this.dataservice.register(this.user).subscribe(
      (response) => {
        // Handle successful registration
        console.log('Registration successful', response);
        // You can provide user feedback or navigate to a different page here
      },
      (error) => {
        // Handle registration error
        console.error('Error during registration', error);
        // You can provide user feedback for the error here
      }
    );
    }
  }