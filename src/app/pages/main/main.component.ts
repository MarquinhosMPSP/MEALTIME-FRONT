import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  user: string = ''

  canOpenNotification = true

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    )

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private notificationService: NotifierService,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.user = this.userService.getUserName()
    this.isHandset$.subscribe(result => this.canOpenNotification = !result)
  }

  logout() {
    this.authService.logout()
  }

}
