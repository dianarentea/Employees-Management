import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripRoutingModule } from './trip-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AppstoreOutline } from '@ant-design/icons-angular/icons';
import { LogoutOutline } from '@ant-design/icons-angular/icons';
import { MyTripsTableComponent } from './my-trips-table/my-trips-table.component';


@NgModule({
  declarations: [
    HomeViewComponent,
    MyTripsTableComponent
  ],
  imports: [
    CommonModule,
    TripRoutingModule,
    NzMenuModule,
    NzIconModule.forRoot([AppstoreOutline, LogoutOutline]),

  ]
})
export class TripModule { }
