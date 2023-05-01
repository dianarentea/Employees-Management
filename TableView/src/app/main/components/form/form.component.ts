import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EmployeesService} from '../../services/employees.service';
import { Employee } from '../../interfaces/employee.interface';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private employeesService: EmployeesService)
   {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      address: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]]
    });
  }
  addEmployee(employee:Employee): void {
  this.employeesService.addEmployee(employee);
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
    this.addEmployee(this.validateForm.value);
    this.resetForm(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
  }

  resetForm(e: MouseEvent): void 
  {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }
  ngOnInit(): void {}
}
