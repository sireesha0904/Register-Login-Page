import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = {
    username: '',
    password: '',
  };

  constructor(private router: Router) {}

  onLogin() {
    console.log('Login credentials:', this.credentials);
    // Simulate successful login
    if (
      this.credentials.username === 'test' &&
      this.credentials.password === 'password'
    ) {
      this.router.navigate(['/welcome']);
    } else {
      alert('Invalid username or password!');
    }
  }
}
