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

  constructor(@Inject(EmployeesService) private employeesService: EmployeesService) {}

  sortAgeFn = (a: Employee, b: Employee): number => a.age - b.age;
  nameFilterFn = (list: string[], item: Employee): boolean => list.some(name => item.name.indexOf(name) !== -1);
  filterName = [
    { text: 'Joe', value: 'Joe' },
    { text: 'John', value: 'John' }
  ];

  ngOnInit(): void {
    this.employeesList=this.employeesService.EmployeesList;
  }
  
}
