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
  showPassword: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    // Implement login logic here
    // If successful, navigate to the welcome page
    this.router.navigate(['/welcome']);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
