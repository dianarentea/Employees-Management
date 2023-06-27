import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import{DashboardComponent} from './components/dashboard/dashboard.component';
import { MainRoutingModule } from './main-routing.module';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule} from 'ng-zorro-antd/button';
import{NzInputModule} from 'ng-zorro-antd/input';

import{NzModalModule} from 'ng-zorro-antd/modal';
import{NzFormModule} from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RouterModule } from '@angular/router';
import { TripModule } from './components/trip/trip.module';





@NgModule({
  declarations: [

    DashboardComponent,
    RegisterComponent,
    LoginComponent,
  ],

  imports: [

    CommonModule,
    MainRoutingModule,
    RouterModule,
    TripModule,

    NzButtonModule,
    NzPageHeaderModule,
    NzTableModule,
    
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    FormsModule,
  ]
})
export class MainModule { }
