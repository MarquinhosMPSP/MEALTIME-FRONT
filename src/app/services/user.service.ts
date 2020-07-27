import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  saveEmail(email) {
    localStorage.setItem('email', email)
  }

  getEmail() {
    const user = localStorage.getItem('email')
    return user
  }

  saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUser() {
    const user = localStorage.getItem('user')
    if (user) return JSON.parse(user)
    return null
  }

}
