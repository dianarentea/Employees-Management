import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import employeesData from './employees.json';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employeesList: Employee[] = employeesData;
  employeesListSubject=new Subject<Employee[]>();

  constructor() { }

  get EmployeesList(): Employee[] {
    return this.employeesList;
  }
  deleteEmployee(employee: Employee): void {
    const index = this.employeesList.indexOf(employee);
    this.employeesList.splice(index, 1);
    this.employeesListSubject.next(this.employeesList);
  }
}
