import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeViewComponent } from './components/trip/home-view/home-view.component';
import { MyTripsComponent } from './components/trip/my-trips/my-trips.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path: 'home-view',
    component: HomeViewComponent
  },
  {
    path:'my-trips',
    component: MyTripsComponent,
  },
  
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
