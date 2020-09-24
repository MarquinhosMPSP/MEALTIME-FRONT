import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-area-de-notificacoes',
  templateUrl: './area-de-notificacoes.component.html',
  styleUrls: ['./area-de-notificacoes.component.scss']
})
export class AreaDeNotificacoesComponent implements OnInit {

  @ViewChild('notifyNav') notifyNav
  @Output() notificationsNumber = new EventEmitter()

  isOpen = false
  notifications = []
  unreadNotifications = []

  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private userService: UserService) {
      const user = this.userService.getUser()
      this.notificationService.connectToSocket(user.nomeRestaurante)
      this.notificationService.getNotification().subscribe(notification => {
        if (notification) {
          this.notifications.push(notification)
          if (!this.isOpen) this.unreadNotifications.push(notification)
          this.notificationsNumber.emit(this.unreadNotifications.length)
        }
      })
  }

  ngOnInit() {
    this.notificationService.listenTo('nova reseva', (data) => {
      this.notificationService.sendNotification(`${data.nome} deseja fazer uma reserva`, 'success')
    })
  }

  showNav() {
    this.unreadNotifications = []
    this.notificationsNumber.emit(this.unreadNotifications.length)
    this.notifyNav.toggle()
    this.isOpen = true
  }

  closeNav() {
    this.notifyNav.toggle()
    this.isOpen = false
  }

  removeNotification(notification) {
    this.notifications = this.notifications.filter(n => n !== notification)
  }

  ngOnDestroy(): void {
    this.notificationService.disconnect()
  }

  navigateTo(route) {
    this.router.navigate([route])
    this.closeNav()
  }

}
