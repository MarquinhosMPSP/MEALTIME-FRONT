import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { BehaviorSubject, Observable } from 'rxjs';
import { Notificacao, TipoNotificacao } from '../model/notificacao';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notification$ = new BehaviorSubject<Notificacao>(null)

  constructor(private snackBar: MatSnackBar) {
    this.notification$.subscribe(notification => {
      if (!notification) return
      this.snackBar.open(notification.message, null, {
        duration: 5000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: TipoNotificacao[notification.type]
      });
    })
  }

  sendNotification(message: string, type: "success" | "warning" | "error"): void {
    this.notification$.next({ message, type })
  }

  getNotification(): Observable<Notificacao> {
    return this.notification$.asObservable()
  }

}
