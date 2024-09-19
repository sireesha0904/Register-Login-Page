import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/welcome']);
    } else {
      this.errorMessage = 'Incorrect username or password';
    }
  }
}
