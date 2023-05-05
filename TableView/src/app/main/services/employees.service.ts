import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import employeesData from './employees.json';
import { Subject } from 'rxjs';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FormComponent } from '../components/form/form.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employeesList: Employee[] = employeesData;
  employeesListSubject=new Subject<Employee[]>();
  employeesListObservable=this.employeesListSubject.asObservable();

  constructor(private modalService: NzModalService) { }

  get EmployeesList(): Employee[] {
    return this.employeesList;
  }
  //for form component
  deleteEmployee(employee: Employee): void 
  {
    const index = this.employeesList.indexOf(employee);
    this.employeesList.splice(index, 1);
    this.employeesListSubject.next([...this.employeesList]);
  }
  addEmployee(employee: Employee): void
  {
    this.employeesList.push(employee);
    this.employeesListSubject.next([...this.employeesList]);
  }
  editEmployee(index: number,employee: Employee): void
  {
    this.employeesList.splice(index, 1, employee);
    this.employeesListSubject.next([...this.employeesList]);
  }

  //for table component
  openAddEmployeeModal(): NzModalRef {
    const modal: NzModalRef = this.modalService.create({
      nzTitle: 'Add Employee',
      nzContent: FormComponent,
      nzFooter: null,
      nzComponentParams: {
        employeeToEdit: null,
        employeeIndex: null,
      },
    });
    return modal;
  }
  openEditEmployeeModal(employee: Employee, index: number): NzModalRef {
    const modal: NzModalRef = this.modalService.create({
      nzTitle: 'Edit Employee',
      nzContent: FormComponent,
      nzFooter: null,
      nzComponentParams:
       {
        employeeToEdit: employee,
        employeeIndex: index,
      },
    });
    return modal;
  }
}
