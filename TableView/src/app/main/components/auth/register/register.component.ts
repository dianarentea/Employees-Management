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


  constructor(private fb: UntypedFormBuilder, private usersService:UsersService, private modalRef:NzModalRef ){}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: [null, [Validators.required]],
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
    });
  }

  registerForm!: FormGroup;

  submitForm(): void {
    const{email,firstname,lastname,password}=this.registerForm.value;
    console.log("submmit din register");
    this.usersService.registerSubmit(email,firstname,lastname,password);
    this.modalRef.close();
  }

  resetForm(e: MouseEvent): void 
  {
    e.preventDefault();
    this.registerForm.reset();
    for (const key in this.registerForm.controls) {
      if (this.registerForm.controls.hasOwnProperty(key)) {
        this.registerForm.controls[key].markAsPristine();
        this.registerForm.controls[key].updateValueAndValidity();
      }
    }
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
}
