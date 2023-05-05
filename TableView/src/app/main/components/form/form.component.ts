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
  selectedPrefix: string = '';
  availablePrefixes: string[]= ['+40', '+42', '+43', '+45', '+53'];


  validateForm: FormGroup;
  @Input() employeeIndex: number | null = null;
  @Input() employeeToEdit: Employee | null = null;
  @Output() formSubmitted = new EventEmitter<void>();
  constructor(private fb: FormBuilder, private employeesService: EmployeesService, private modalRef: NzModalRef)
   {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      age: ['16', [Validators.required]],
      address: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      prefix: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]]
    });
  }
  
  submitForm(): void {
    console.log('submit', this.validateForm.value);
    if (this.validateForm.valid) {
      const formValue = this.validateForm.value;
      const phoneNumber = String(formValue.phoneNumber);
      const prefix = String(formValue.prefix);
      const phoneNumberWithPrefix = `${prefix}${phoneNumber}`;

    formValue.phoneNumber = phoneNumberWithPrefix;

    if (this.editMode) 
    {
      this.employeesService.editEmployee(this.employeeIndex!, formValue);
    } 
    else 
    {
      this.employeesService.addEmployee(formValue);
    }

    this.resetForm(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    this.editMode = false;
    this.employeeIndex = null;
    this.modalRef.close();
    this.formSubmitted.emit();
  }
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
    
  const phoneNumberWithPrefix = employee.phoneNumber.toString();
  const phoneNumber = phoneNumberWithPrefix.replace(/^[+]\d{2,3}/, '');
  const prefix = phoneNumberWithPrefix.substring(0, phoneNumberWithPrefix.length - phoneNumber.length);
  this.selectedPrefix = prefix;

  const updatedEmployee = {
    ...employee,
    prefix: prefix,
    phoneNumber: phoneNumber
  };
    this.validateForm.patchValue(updatedEmployee);
    this.employeeIndex = index;
    this.editMode = true;
  }
  
  ngOnInit(): void {
    if (this.employeeToEdit && this.employeeIndex !== null) {
      this.setFormData(this.employeeToEdit, this.employeeIndex);
  }
}
}

