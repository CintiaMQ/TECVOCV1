import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isCollapsed: boolean = false;
  @Output() toggleSidebar = new EventEmitter<void>();
  isSidebarVisible: boolean = true;
  isAuthenticated: boolean;
  userName: string;

  constructor(private usersService: UsersService) {
    this.isAuthenticated = this.usersService.isAuthenticated();
    this.userName = this.usersService.getUserName();
  }

  // toggleSidebar() {
  //   this.toggleSidebar.emit();
  // }

  logout() {
    this.usersService.logout();
  }
}
