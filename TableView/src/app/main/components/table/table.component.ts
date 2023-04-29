import { Component, OnInit, Inject} from '@angular/core';
import{Employee} from '../../interfaces/employee.interface';
import {EmployeesService} from '../../services/employees.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  employeesList!: Employee[];

  constructor(@Inject(EmployeesService) private employeesService: EmployeesService) {
    this.employeesService.employeesListSubject.subscribe((res) => {
      this.employeesList = [...res];
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
}
