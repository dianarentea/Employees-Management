import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/main/interfaces/trip';
import { TripsService } from 'src/app/main/services/trips.service';
import { UsersService } from 'src/app/main/services/users.service';

@Component({
  selector: 'app-my-trips-table',
  templateUrl: './my-trips-table.component.html',
  styleUrls: ['./my-trips-table.component.scss']
})
export class MyTripsTableComponent implements OnInit {

  tripsList!: Trip[];
  currentPage: number = 1;

  constructor(private tripsService: TripsService, private usersService: UsersService) {
    this.tripsService.tripsListObservable.subscribe((trips) => {
      this.tripsList = trips;
    });
  }
  get TripsList(): Trip[] {
    return this.tripsList;
  }

  ngOnInit(): void {
    const currentUserEmail = this.usersService.CurrentUserEmail;
    this.tripsList = this.tripsService.TripsList.filter((trip) => trip.userEmail === currentUserEmail);
  }

  sortCountryFn = (a: Trip, b: Trip): number => a.country.localeCompare(b.country);
  sortCityFn = (a: Trip, b: Trip): number => a.city.localeCompare(b.city);
  sortAttractionFn = (a: Trip, b: Trip): number => a.attraction.localeCompare(b.attraction);
  sortRestaurantFn = (a: Trip, b: Trip): number => a.restaurant.localeCompare(b.restaurant);
  sortLikesFn = (a: Trip, b: Trip): number => a.likes - b.likes;

  deleteTrip(trip: Trip) {
    this.tripsService.deleteTrip(trip);
  }
  addTrip() {
    this.tripsService.openAddTripModal();
  }
  editTrip(trip: Trip, index: number): void {
    this.tripsService.openEditTripModal(trip, index);
  }
  get showLoading(): boolean {
    return this.tripsService.isFormSubmitting;
  }

}
