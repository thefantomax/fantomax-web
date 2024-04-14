import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://example.com/api/register';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return throwError('Registration failed. Please try again later.');
      })
    );
  }
}
