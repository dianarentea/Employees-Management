import { Injectable, OnInit } from '@angular/core';
import { Trip } from '../interfaces/trip';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import tripsData from './trips.json';
import { Subject } from 'rxjs';
import { TripFormComponent } from '../components/trip/trip-form/trip-form.component';
import { UsersService } from './users.service';
@Injectable({
  providedIn: 'root'
})
export class TripsService implements OnInit {

  private tripsList: Trip[] = tripsData;
  private tripsListCurrentUser: Trip[] = [];
  tripsListSubject=new Subject<Trip[]>();
  tripsListObservable=this.tripsListSubject.asObservable();

  constructor(private modalService: NzModalService, private usersService: UsersService) { }
  
  ngOnInit(): void {
   this.tripsListCurrentUser = this.tripsList.filter((trip) => trip.userEmail === this.usersService.CurrentUserEmail);
  }

  get TripsList(): Trip[] {
    return this.tripsList;
  }

  get TripsListCurrentUser(): Trip[] {
    return this.tripsListCurrentUser;
  }

  deleteTrip(trip: Trip): void
  {
    const index = this.tripsList.indexOf(trip);
    this.tripsList.splice(index, 1);
    this.tripsListSubject.next([...this.tripsList]);
    this.updateTripsListCurrentUser();
  }
  addTrip(trip: Trip): void
  {
    trip.userEmail = this.usersService.CurrentUserEmail;
    this.tripsList.push(trip);
    this.tripsListSubject.next([...this.tripsList]);
    this.updateTripsListCurrentUser();
  }
  editTrip(index: number,trip: Trip): void
  {
    this.tripsList.splice(index, 1, trip);
    this.tripsListSubject.next([...this.tripsList]);
    this.updateTripsListCurrentUser();
  }
  private updateTripsListCurrentUser(): void {
    const currentUserEmail = this.usersService.CurrentUserEmail;
    this.tripsListCurrentUser = this.tripsList.filter((trip) => trip.userEmail === currentUserEmail);
    this.tripsListSubject.next([...this.tripsListCurrentUser]);
  }

  openAddTripModal(): NzModalRef {
    const modal: NzModalRef = this.modalService.create({
      nzTitle: 'Add Trip',
      nzContent: TripFormComponent,
      nzFooter: null,
      nzComponentParams: 
      {
         tripToEdit: null,
        tripIndex: null,
      },
    });
    return modal;
  }
  openEditTripModal(trip: Trip, index: number): NzModalRef {
    const modal: NzModalRef = this.modalService.create({
      nzTitle: 'Edit Trip',
      nzContent: TripFormComponent,
      nzFooter: null,
      nzComponentParams:
        {
          tripToEdit: trip,
          tripIndex: index,
        },
    });
    return modal;
  }

}
