import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications$ = new BehaviorSubject<any>(null)

  constructor(private notifier: NotifierService) {
  }

  sendNotification(message: string, type: string): void {
    this.notifications$.next({ message, type })
    this.notifier.notify(type, message)
  }

  getNotification(): Observable<any> {
    return this.notifications$.asObservable()
  }

}
