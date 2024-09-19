import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // Declare the properties for two-way binding
  name: string = '';
  email: string = '';
  phoneNumber: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  // Example of a method to handle form submission
  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
    } else {
      console.log('User Registered:', {
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
        username: this.username,
      });
    }
  }
}
