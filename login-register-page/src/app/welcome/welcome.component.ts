import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  username: string = 'User'; // Set this value dynamically in a real app

  constructor(private router: Router) {}

  // Logout method
  logout(): void {
    // Clear any stored user data (if using local storage, session storage, etc.)
    localStorage.removeItem('user');

    // Navigate back to the login page
    this.router.navigate(['/login']);
  }
}
