import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/main/interfaces/trip';
import { TripsService } from 'src/app/main/services/trips.service';

@Component({
  selector: 'app-all-trips',
  templateUrl: './all-trips.component.html',
  styleUrls: ['./all-trips.component.scss']
})
export class AllTripsComponent implements OnInit{

  cardTripList!:Trip[];
constructor(private tripsService: TripsService){};

  ngOnInit(): void {
  this.cardTripList = this.tripsService.TripsList;
  }

}
