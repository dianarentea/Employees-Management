import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeViewComponent } from './components/trip/home-view/home-view.component';
import { MyTripsComponent } from './components/trip/my-trips/my-trips.component';
import { AllTripsComponent } from './components/trip/all-trips/all-trips.component';

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
  {
    path:'all-trips',
    component: AllTripsComponent
  }
  
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
