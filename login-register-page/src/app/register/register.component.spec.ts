import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name = '';
  email = '';
  phoneNumber = '';
  username = '';
  password = '';
  confirmPassword = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.password === this.confirmPassword) {
      // Perform registration logic here (e.g., API call)
      this.router.navigate(['/welcome']);
    } else {
      alert('Passwords do not match');
    }
  }
}
