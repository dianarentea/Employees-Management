import { Injectable } from '@angular/core';
import { Trip } from '../interfaces/trip';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import tripsData from './trips.json';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor() { }
}
