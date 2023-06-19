import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/main/services/users.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  homePageTitle?: string;
  currentUsername?: string;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.homePageTitle='NEW ADVENTURE';
    this.currentUsername=this.usersService.CurrentUsername;
  }
  openMyTrips(): void {
   this.usersService.openMyTrips();
  }
  openAllTrips(): void {
    this.usersService.openAllTrips();
  }
  logout(): void {
    this.usersService.logout();
  }

}
