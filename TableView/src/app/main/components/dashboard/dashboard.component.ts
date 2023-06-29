import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  homePageTitle?: string;

  constructor(private usersService: UsersService) { }
  ngOnInit(): void {
    this.homePageTitle = 'NEW ADVENTURE';
    this.usersService.ngOnInit();
  }
  openLogin() {
    this.usersService.openLogin();
  }
  openRegister() {
    this.usersService.openRegister();
  }
}
