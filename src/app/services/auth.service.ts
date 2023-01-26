import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user/user';
import { environment } from '../environments/environment';
import { UserUsage } from '../models/UserUsage/user-usage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  checkLogin(): Observable<User> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<User>(`${this.baseUrl}/check`, { headers }).pipe(
      map((res: any) => {
        return res.user;
      })
    );
  }

  signUp(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, data).pipe(
      map((res: any) => {
        localStorage.setItem('token', res.token);
        return res;
      })
    );
  }

  logIn(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data).pipe(
      map((res: any) => {
        localStorage.setItem('token', res.token);
        return res.user;
      })
    );
  }

  logOut() {
    localStorage.removeItem(`token`);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getAllUsers(): Observable<User[]> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(`${this.baseUrl}/allUsers`, { headers }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getUserUsage(userId: string | undefined): Observable<UserUsage> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http
      .get(`${this.baseUrl}/userusage/${userId}`, { headers })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
