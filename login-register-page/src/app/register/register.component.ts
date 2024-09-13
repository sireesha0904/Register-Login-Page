import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private router: Router) {}

  onRegister() {
    if (this.user.password === this.user.confirmPassword) {
      console.log('User registered:', this.user);
      // Navigate to login page after registration
      this.router.navigate(['/login']);
    } else {
      alert('Passwords do not match!');
    }
  }
}
