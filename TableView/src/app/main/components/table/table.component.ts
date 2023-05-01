import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import{Employee} from '../../interfaces/employee.interface';
import {EmployeesService} from '../../services/employees.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FormComponent } from '../form/form.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  @Output() employeeToEdit = new EventEmitter<{ employee: Employee; index: number }>();
  employeesList!: Employee[];
  FormComponent: any;

  constructor( private employeesService: EmployeesService, private modalService: NzModalService) {
    this.employeesService.employeesListObservable.subscribe((employees) => {
      this.employeesList = employees;
      });
    }

  
  ngOnInit(): void {
    this.employeesList=this.employeesService.EmployeesList;
  }
  
  sortAgeFn = (a: Employee, b: Employee): number => a.age - b.age;
 
  sortNameFn = (a: Employee, b: Employee): number => a.name.localeCompare(b.name);

  deleteEmployee(employee: Employee) {
   this.employeesService.deleteEmployee(employee);
  }
  editEmployee(employee: Employee, index: number): void {
    this.FormComponent.openEditForm(employee, index);
  }
  addEmployee() {
    const modal: NzModalRef = this.modalService.create({
      nzTitle: 'Add Employee',
      nzContent: FormComponent,
      nzFooter: null,
    });
  }
}
