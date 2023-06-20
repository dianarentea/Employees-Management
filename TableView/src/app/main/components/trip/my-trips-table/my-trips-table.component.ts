import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Trip } from 'src/app/main/interfaces/trip';
import { TripsService } from 'src/app/main/services/trips.service';

@Component({
  selector: 'app-my-trips-table',
  templateUrl: './my-trips-table.component.html',
  styleUrls: ['./my-trips-table.component.scss']
})
export class MyTripsTableComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

}
