import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class careerComponent { // Corrected class name to follow conventions
  user = {
    firstName: '',
    email: '',
    mobile:'',
    experience:'',
    department:'',
    location:'',
    file:'',
    // Add other fields as needed
  };

  constructor(private dataService: DataService) {}

  onSubmit() {
    this.dataService.createUser(this.user).subscribe((response) => {
      console.log('User created:', response);
    });
  }
  onMySubmit() {
    this.dataService.userData(this.user).subscribe((response) => {
      console.log('All created:', response);
    });
  }
  


}