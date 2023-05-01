import { Component } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  selectedEmployee: Employee | null = null;
  selectedEmployeeIndex: number | null = null;

  openEditForm({ employee, index }: { employee: Employee; index: number }): void {
    this.selectedEmployee = employee;
    this.selectedEmployeeIndex = index;
  }

  resetSelectedEmployee(): void {
    this.selectedEmployee = null;
    this.selectedEmployeeIndex = null;
  }
}
