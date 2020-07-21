import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  saveUserName(user) {
    localStorage.setItem('user', user)
  }

  getUserName() {
    return localStorage.getItem('user')
  }

  saveUserCredentials(login, pass) {
    localStorage.setItem('email', login)
    localStorage.setItem('pass', pass)
  }

  getUserCredentials() {
    const user = localStorage.getItem('email')
    const pass = localStorage.getItem('pass')
    return [user, pass]
  }

}
