import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

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

  constructor(private notificationService: NotificationService) {
    this.notificationService.getNotification().subscribe(notification => {
      if (notification) {
        this.notifications.push(notification)
        if (!this.isOpen) this.unreadNotifications.push(notification)
        this.notificationsNumber.emit(this.unreadNotifications.length)
      }
    })
  }

  ngOnInit() {
    setTimeout(() => {
      this.notificationService.sendNotification('Chegou uma nova reserva', 'success')
      setTimeout(() => {
        this.notificationService.sendNotification('Cancelaram uma reserva', 'error')
        setTimeout(() => {
          this.notificationService.sendNotification('Cliente chamando garçom na mesa 2', 'info')
        }, 10000);
      }, 4000);
    }, 2000);
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

}
