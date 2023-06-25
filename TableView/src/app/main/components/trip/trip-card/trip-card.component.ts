import { Component, Input } from '@angular/core';
import { Trip } from 'src/app/main/interfaces/trip';
import { TripsService } from 'src/app/main/services/trips.service';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent {

  constructor(private tripsService: TripsService) { }

  @Input() tripCard!: Trip;
  

  
}
