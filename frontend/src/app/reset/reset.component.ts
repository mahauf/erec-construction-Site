import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
})
export class PasswordResetComponent {
  email: string = '';

  constructor(private dataService: DataService) {}

  onSubmit() {
    // Call your resetPassword method from the DataService
    this.dataService.resetPassword(this.email).subscribe(
      (response) => {
        // Handle the response from the server (e.g., display a success message)
        console.log('Password reset email sent successfully', response);
      },
      (error) => {
        // Handle the error (e.g., display an error message)
        console.error('Error resetting password', error);
      }
    );
  }
}
