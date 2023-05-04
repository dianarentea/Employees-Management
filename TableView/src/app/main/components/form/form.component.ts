import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EmployeesService} from '../../services/employees.service';
import { Employee } from '../../interfaces/employee.interface';
import { NzModalRef } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  
  editMode = false;
  
  validateForm: FormGroup;
  @Input() employeeIndex: number | null = null;
  @Input() employeeToEdit: Employee | null = null;
  @Output() formSubmitted = new EventEmitter<void>();
  constructor(private fb: FormBuilder, private employeesService: EmployeesService, private modalRef: NzModalRef)
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

  openEditForm(employee: Employee, index: number): void {
    this.editMode = true;
    this.employeeIndex = index;
    this.validateForm.patchValue(employee);
  }
  
  submitForm(): void {
    console.log('submit', this.validateForm.value);
    if (this.editMode) {
      this.employeesService.editEmployee(this.employeeIndex!, this.validateForm.value); 
    } else {
      this.addEmployee(this.validateForm.value);
    }
    this.resetForm(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
    this.editMode = false;
    this.employeeIndex = null;
    this.modalRef.close();
    this.formSubmitted.emit();
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
  setFormData(employee: Employee, index: number) {
    this.validateForm.patchValue(employee);
    this.employeeIndex = index;
    this.editMode = true;
  }
  
  ngOnInit(): void {
    if (this.employeeToEdit && this.employeeIndex !== null) {
      this.setFormData(this.employeeToEdit, this.employeeIndex);
  }
}
}

