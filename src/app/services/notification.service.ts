import io from 'socket.io-client'
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  socket = null
  notifications$ = new BehaviorSubject<any>(null)

  constructor(private notifier: NotifierService) {
  }

  connectToSocket(user) {
    this.socket = io.connect(environment.notificationServer, { query: { key: user } })
  }

  listenTo(event, fn) {
    this.socket.on(event, fn)
  }

  sendNotification(message: string, type: string): void {
    this.notifications$.next({ message, type })
    this.notifier.notify(type, message)
  }

  onlyShowNotification(message: string, type: string) {
    this.notifier.notify(type, message)
  }

  getNotification(): Observable<any> {
    return this.notifications$.asObservable()
  }

  disconnect() {
    try {
      this.socket.close()
    } catch (error) {
      console.error(error);
    }
  }

}
