import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgePipePipe } from './pipes/age-pipe.pipe';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainRoutingModule } from './main-routing.module';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule} from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [
    AgePipePipe,
    FormComponent,
    DashboardComponent,
    FormComponent,
    TableComponent  ],
  imports: [
    CommonModule,
    MainRoutingModule,

    NzButtonModule,
    NzPageHeaderModule,
    NzTableModule,
    NzIconModule,
  ]
})
export class MainModule { }
