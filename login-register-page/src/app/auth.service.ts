import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api'; // Update with your API endpoint

  constructor(private http: HttpClient) {}

  register(user: {
    name: string;
    email: string;
    username: string;
    password: string;
  }): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/register`, user)
      .pipe(catchError(this.handleError('register', [])));
  }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/login`, { username, password })
      .pipe(catchError(this.handleError('login', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
