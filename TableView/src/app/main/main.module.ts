import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipePipe } from './pipes/age-pipe.pipe';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    AgePipePipe,
    TableComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
