import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/main/services/trips.service';
import { UsersService } from 'src/app/main/services/users.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  homePageTitle?: string;
  currentUsername?: string;

  constructor(private usersService: UsersService, private tripsService: TripsService) { }

  ngOnInit(): void {
    this.homePageTitle = 'NEW ADVENTURE';
    this.tripsService.ngOnInit();
    this.currentUsername = this.usersService.CurrentUsername;
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
