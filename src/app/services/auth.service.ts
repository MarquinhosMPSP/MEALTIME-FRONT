import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public api_url: string = 'https://staging-mealtime-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  login(login, senha): Observable<any> {
    return this.http.post(`${this.api_url}/login`, { login, senha })
  }

  logout() {
    localStorage.removeItem('token')
    window.location.reload()
  }

  setToken(token): void {
    if (token) localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  removeToken() {
    localStorage.removeItem('token')
  }

}
