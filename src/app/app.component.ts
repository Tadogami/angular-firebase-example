import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$ = this.authService.afUser$;
  constructor(
    private authService: AuthService
  ) {}

  title = 'dog-hunting';

  logout() {
    this.authService.logout();
  }
}
