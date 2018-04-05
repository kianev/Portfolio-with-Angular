import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 @Output() closeSidenav = new EventEmitter<any>();

  constructor(public authService: AuthService) { }

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.authService.logout();
    this.closeSidenav.emit();
  }
}
