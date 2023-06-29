import { Injectable, OnInit } from '@angular/core';
import { Trip } from '../interfaces/trip';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Subject } from 'rxjs';
import { TripFormComponent } from '../components/trip/trip-form/trip-form.component';
import { UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TripsService implements OnInit {

  private tripsList: Trip[] = [];
  private tripsListCurrentUser: Trip[] = [];

  tripsListSubject = new Subject<Trip[]>();
  tripsListObservable = this.tripsListSubject.asObservable();

  isFormSubmitting: boolean = false;

  constructor(private modalService: NzModalService, private usersService: UsersService, private http: HttpClient) {
    this.http.get<Trip[]>('http://localhost:3000/trips').subscribe((trips: Trip[]) => {
      this.tripsList = trips;
    }
    );
    this.tripsListCurrentUser = this.tripsList.filter((trip) => trip.userEmail === this.usersService.CurrentUserEmail);
    this.tripsListSubject.next([...this.tripsList]);
  }

  ngOnInit(): void { }

  get TripsList(): Trip[] {
    return this.tripsList;
  }

  get TripsListCurrentUser(): Trip[] {
    return this.tripsListCurrentUser;
  }

  async deleteTrip(trip: Trip): Promise<void> {
    try {
      this.isFormSubmitting = true;
      const index = this.tripsList.indexOf(trip);
      await this.http.delete('http://localhost:3000/trips/' + trip.id).toPromise();

      this.tripsList.splice(index, 1);
      this.tripsListSubject.next([...this.tripsList]);

      await this.updateTripsListCurrentUser();
    } catch (error) {
      console.error(error);
    } finally {
      this.isFormSubmitting = false;
    }

  }

  async addTrip(trip: Trip): Promise<void> {
    try {
      this.isFormSubmitting = true;
      trip.id = this.tripsList.length + 1;
      trip.likes = 0;
      trip.userEmail = this.usersService.CurrentUserEmail;

      await this.http.post('http://localhost:3000/trips', trip).toPromise();

      this.tripsList.push(trip);
      this.tripsListSubject.next([...this.tripsList]);

      await this.updateTripsListCurrentUser();
    } catch (error) {
      console.error(error);
    } finally {
      this.isFormSubmitting = false;
    }
  }

  async editTrip(trip: Trip, index: number): Promise<void> {
    try {
      this.isFormSubmitting = true;

      await this.http.put('http://localhost:3000/trips/' + trip.id, trip).toPromise();

      this.tripsListCurrentUser.splice(index, 1, trip);
      this.tripsListSubject.next([...this.tripsListCurrentUser]);
      await this.updateTripsListCurrentUser();

    } catch (error) {
      console.error(error);
    } finally {
      this.isFormSubmitting = false;
    }
  }

  private updateTripsListCurrentUser(): void {
    this.http.get<Trip[]>('http://localhost:3000/trips').subscribe((trips: Trip[]) => {

      this.tripsList = trips;
      const currentUserEmail = this.usersService.CurrentUserEmail;

      this.tripsListCurrentUser = this.tripsList.filter((trip) => trip.userEmail === currentUserEmail);
      this.tripsListSubject.next([...this.tripsListCurrentUser]);
    }
    );
  }

  isTripLikedByCurrentUser(trip: Trip): boolean {
    if (trip.userEmail != this.usersService.CurrentUserEmail && trip.likedByCurrentUser == false) {
      trip.likedByCurrentUser = true;
      return true;
    }
    return false;
  }

  updateTripLikes(trip: Trip): void {
    console.log('tripid', trip.id);
    this.http.put('http://localhost:3000/trips/' + trip.id, trip).subscribe((res) => {
    });
    this.tripsListSubject.next([...this.tripsList]);
    this.updateTripsListCurrentUser();
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
