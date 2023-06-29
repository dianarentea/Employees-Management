import { Component, Input } from '@angular/core';
import { Trip } from 'src/app/main/interfaces/trip';
import { TripsService } from 'src/app/main/services/trips.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent {

  faHeart = faHeart;

  constructor(private tripsService: TripsService) { }

  @Input() tripCard!: Trip;

  likeTrip(trip: Trip): void {
    if (this.tripsService.isTripLikedByCurrentUser(trip) == true) {
      trip.likes++;
    }
    this.tripsService.updateTripLikes(trip);
  }
}
