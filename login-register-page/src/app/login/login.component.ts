import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  invalidCredentials: boolean = false; // Use a boolean flag

  constructor(private router: Router) {}

  onLogin() {
    // Replace with your actual login logic
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/welcome']);
      this.invalidCredentials = false; // Reset the flag on successful login
    } else {
      this.invalidCredentials = true; // Show invalid credentials message
    }
  }
}
