import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 @Output() sidenavToggle = new EventEmitter<void>();

  constructor(public authService: AuthService) { }

  onSidenavToggle() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout();
  }
}
