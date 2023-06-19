import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripRoutingModule } from './trip-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AppstoreOutline } from '@ant-design/icons-angular/icons';
import { LogoutOutline } from '@ant-design/icons-angular/icons';


@NgModule({
  declarations: [
    HomeViewComponent
  ],
  imports: [
    CommonModule,
    TripRoutingModule,
    NzMenuModule,
    NzIconModule.forRoot([AppstoreOutline, LogoutOutline]),

  ]
})
export class TripModule { }
