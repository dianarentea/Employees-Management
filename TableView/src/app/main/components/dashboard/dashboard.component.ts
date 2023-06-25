import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';
import { EmployeesService } from '../../services/employees.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  selectedEmployee: Employee | null = null;
  selectedEmployeeIndex: number | null = null;
  homePageTitle?: string;

  constructor(private employeesService: EmployeesService, private usersService:UsersService) 
  { }
  ngOnInit(): void {
    this.homePageTitle='NEW ADVENTURE';
    this.usersService.ngOnInit();
  }
openLogin()
{
  this.usersService.openLogin();
}
openRegister()
{
  this.usersService.openRegister();
}
}
