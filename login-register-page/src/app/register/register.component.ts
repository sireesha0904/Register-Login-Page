import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  phoneNumber: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  // This method handles the registration form submission
  onRegister(): void {
    if (
      this.name &&
      this.phoneNumber &&
      this.email &&
      this.username &&
      this.password &&
      this.confirmPassword
    ) {
      if (this.password === this.confirmPassword) {
        // Replace this with an API call to your backend
        console.log('Name:', this.name);
        console.log('Phone Number:', this.phoneNumber);
        console.log('Email:', this.email);
        console.log('Username:', this.username);
        console.log('Password:', this.password);

        // Navigate to the login page after successful registration
        this.router.navigate(['/login']);
      } else {
        alert('Passwords do not match!');
      }
    } else {
      alert('Please fill in all fields.');
    }
  }
}
