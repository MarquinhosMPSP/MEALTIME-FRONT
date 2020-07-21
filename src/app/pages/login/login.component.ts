import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string = ''
  senha: string = ''
  lembrar: boolean = false

  constructor(
    private authService: AuthService,
    private route: Router,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.getNotification().subscribe(notificacao => {
      if (notificacao) console.log(notificacao);
    })
    this.getCachedUser()
  }

  doLogin() {
    if (this.lembrar) this.saveUser()
    this.authService.login(this.login, this.senha)
      .subscribe(data => {
        if (data.token) {
          this.authService.setToken(data.token)
          this.route.navigate(['/home'])
        }
      },
      error => {
        this.notificationService.sendNotification(error.error.message, 'warning')
      })
  }

  saveUser() {
    localStorage.setItem('email', this.login)
    localStorage.setItem('pass', this.senha)
  }

  getCachedUser() {
    const email = localStorage.getItem('email')
    const pass = localStorage.getItem('pass')

    if (email && pass) {
      this.login = email
      this.senha = pass
    }
  }

}
