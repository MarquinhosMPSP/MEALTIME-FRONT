import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private notificationService: NotificationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken()
    if (token) {
      const headers = req.headers.set('x-access-token', token);
      const authReq = req.clone({ headers });
      return next.handle(authReq).pipe(
        catchError((err: any) => this.errorHandling(err))
      )
    }
    return next.handle(req).pipe(
      catchError((err: any) => this.errorHandling(err))
    )
  }

  errorHandling = err => {
    if (err instanceof HttpErrorResponse) {
      try {
        this.isInvalidToken(err)
        this.notificationService.onlyShowNotification(err.error.message, 'error')
      } catch (error) {
        this.notificationService.onlyShowNotification('ocorreu um erro inesperado.', 'error')
      }
    }
    return of(err)
  }

  isInvalidToken(response) {
    if (response && response.error && response.error.message) {
      if (response.error.message.includes('token') || response.error.message.includes('acesso')) {
        setTimeout(this.authService.logout, 1000);
      }
    }
  }
}
