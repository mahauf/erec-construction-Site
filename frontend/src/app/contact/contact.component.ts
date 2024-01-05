import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  text = {
    firstName: '',
    email: '',
    text: '',
  };

  constructor(private dataservice: DataService) {}

  onSubmit() {
    this.dataservice.userText(this.text).subscribe((response) => {
      console.log('Text created:', response);
    });
  }
  onMySubmit() {
    this.dataservice.userAll(this.text).subscribe((response) => {
      console.log('All Data:', response);
    });
  }
  
}
