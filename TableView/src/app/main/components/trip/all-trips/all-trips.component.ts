import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Trip } from 'src/app/main/interfaces/trip';
import { TripsService } from 'src/app/main/services/trips.service';

@Component({
  selector: 'app-all-trips',
  templateUrl: './all-trips.component.html',
  styleUrls: ['./all-trips.component.scss']
})
export class AllTripsComponent implements OnInit {

  cardTripList!: Trip[];
  searchCard = '';
  filteredCards!: Trip[];

  constructor(private tripsService: TripsService) { };

  search() {
    if (this.searchCard.length >= 1) {
      this.filteredCards = this.cardTripList.filter(card => {
        const searchTerm = this.searchCard.toLowerCase();
        const country = card.country.toLowerCase();
        const city = card.city.toLowerCase();
        return (
          country.startsWith(searchTerm) ||
          city.startsWith(searchTerm) ||
          country.includes(searchTerm) ||
          city.includes(searchTerm)
        );
      });
    } else {
      this.filteredCards = this.cardTripList;
    }
  }
  
  clearSearch() {
    this.searchCard = '';
    this.filteredCards = this.cardTripList;
  }

  ngOnInit(): void {
    this.cardTripList = this.tripsService.TripsList;
    this.filteredCards = this.cardTripList;
  }

}
