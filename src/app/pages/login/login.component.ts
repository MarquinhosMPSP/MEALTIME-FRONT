import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { TipoNotificacao } from 'src/app/model/notificacao';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string = ''
  senha: string = ''

  constructor(
    private authService: AuthService,
    private route: Router,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.getNotification().subscribe(notificacao => {
      if (notificacao) console.log(notificacao);
    })
  }

  doLogin() {
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

}
