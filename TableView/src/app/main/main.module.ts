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

import{NzModalModule} from 'ng-zorro-antd/modal';
import{NzFormModule} from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';




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
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
