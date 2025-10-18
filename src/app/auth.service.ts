import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // 👇 We remove the old API URL — no backend now
  // baseurl: string = 'https://sticky-note-fe.vercel.app/';

  constructor(private _httpclient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('usertoken')) {
      this.saveUserData();
    }
  }

  userdata: any = new BehaviorSubject(null);

saveUserData() {
  const token = localStorage.getItem('usertoken');
  if (!token) return;

  try {
    // Since our mock token is base64 JSON, decode manually
    const decodedJson = atob(token);
    const decodedData = JSON.parse(decodedJson);
    this.userdata.next(decodedData);
    console.log('Decoded user:', decodedData);
  } catch (e) {
    console.warn('Invalid token format');
  }
}


  // 🔹 Mock signup — just save fake user locally
  signup(data: any): Observable<any> {
    console.log('Signup data:', data);
    // Simulate backend success
    localStorage.setItem('registeredUser', JSON.stringify(data));
    return of({ message: 'Signup successful' });
  }

  // 🔹 Mock signin — check local "registeredUser"
  signin(data: any): Observable<any> {
    const stored = localStorage.getItem('registeredUser');
    const user = stored ? JSON.parse(stored) : null;

    if (user && user.email === data.email && user.password === data.password) {
      const fakeToken = btoa(JSON.stringify(user)); // mock token
      localStorage.setItem('usertoken', fakeToken);
      this.saveUserData();
      return of({ message: 'Login successful', token: fakeToken });
    } else {
      return throwError(() => new Error('Invalid email or password'));
    }
  }

  signout() {
    localStorage.removeItem('usertoken');
    this.userdata.next(null);
    this._Router.navigate(['/login']);
  }
}
