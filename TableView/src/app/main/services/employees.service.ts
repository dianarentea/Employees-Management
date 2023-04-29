import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import employeesData from './employees.json';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employeesList: Employee[] = employeesData;

  constructor() { }

  get EmployeesList(): Employee[] {
    return this.employeesList;
  }
}
