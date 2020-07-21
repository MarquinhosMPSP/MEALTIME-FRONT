import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';


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
    private userService: UserService,
    private notificationService: NotificationService,
    private route: Router) { }

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
        if (data.token && data.usuario) {
          this.authService.setToken(data.token)
          this.userService.saveUserName(data.usuario.nome)
          this.route.navigate(['/home'])
        }
      },
      error => {
        this.notificationService.sendNotification(error.error.message, 'warning')
      })
  }

  saveUser() {
    this.userService.saveUserCredentials(this.login, this.senha)
  }

  getCachedUser() {
    const [email, pass] = this.userService.getUserCredentials()

    if (email && pass) {
      this.login = email
      this.senha = pass
    }
  }

}
