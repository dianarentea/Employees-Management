import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripRoutingModule } from './trip-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AppstoreOutline } from '@ant-design/icons-angular/icons';
import { LogoutOutline } from '@ant-design/icons-angular/icons';
import { MyTripsTableComponent } from './my-trips-table/my-trips-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TripFormComponent } from './trip-form/trip-form.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { AllTripsComponent } from './all-trips/all-trips.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzSpinModule } from 'ng-zorro-antd/spin';


@NgModule({
  declarations: [
    HomeViewComponent,
    MyTripsTableComponent,
    MyTripsComponent,
    TripFormComponent,
    AllTripsComponent,
    TripCardComponent

  ],
  imports: [
    CommonModule,
    TripRoutingModule,
    NzMenuModule,
    NzIconModule.forRoot([AppstoreOutline, LogoutOutline]),
    NzTableModule,
    FormsModule,
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    NzIconModule,
    FontAwesomeModule,
    NzSpinModule

  ]
})
export class TripModule { }
