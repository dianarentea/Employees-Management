import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { UsersService } from 'src/app/main/services/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: UntypedFormBuilder, private usersService: UsersService, private modalRef: NzModalRef) { }

  ngOnInit(): void {
    this.initializeRegisterForm();
  }

  initializeRegisterForm(): void {
    this.registerForm = this.fb.group({
      email: [null, [Validators.required, Validators.email, this.emailValidator]],
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      password: [null, [Validators.required, this.passwordValidator]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    const { email, firstname, lastname, password } = this.registerForm.value;
    this.usersService.registerSubmit(email, firstname, lastname, password);
    this.modalRef.close();
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.registerForm.reset();
    for (const key in this.registerForm.controls) {
      if (this.registerForm.controls.hasOwnProperty(key)) {
        this.registerForm.controls[key].markAsPristine();
        this.registerForm.controls[key].updateValueAndValidity();
      }
    }
  }

  isFieldValid(field: string): boolean | undefined {
    const control = this.registerForm.get(field);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  displayFieldError(field: string, error: string): boolean | undefined {
    const control = this.registerForm.get(field);
    return control?.hasError(error);
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.registerForm.controls['checkPassword'].updateValueAndValidity());
  }

  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  isEmailValid(): boolean | undefined {
    const userEmail = this.usersService.UsersList.find(user => user.email === this.registerForm.get('email')?.value);
    return userEmail?.email === this.registerForm.get('email')?.value;
  }

  emailValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (this.isEmailValid()) {
      return { email: true, error: true };
    }
    return {};
  };

  passwordValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    }
    else if (control.value.length < 8) {
      return { minlength: true, error: true };
    }
    else if (!control.value.match(/[A-Z]/)) {
      return { uppercase: true, error: true };
    }
    else if (!control.value.match(/[a-z]/)) {
      return { lowercase: true, error: true };
    }
    else if (!control.value.match(/[0-9]/)) {
      return { number: true, error: true };
    }
    else if (!control.value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
      return { special: true, error: true };
    }
    return {};
  };

  getPasswordValidationStatus(): string {
    const passwordControl = this.registerForm.get('password');
    if (passwordControl?.dirty && passwordControl?.errors) {
      return 'error';
    }
    return 'success';
  }

  isPasswordValid(): boolean | undefined {
    const passwordControl = this.registerForm.get('password');
    return passwordControl?.dirty && passwordControl?.valid;
  }
}
