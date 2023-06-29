import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { UsersService } from 'src/app/main/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  showErrorMessage = false;
  rememberMe: boolean = true;

  constructor(private fb: FormBuilder, private usersService: UsersService, private modalRef: NzModalRef) { }

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm(): void {
    let rememberedEmail = localStorage.getItem('rememberedEmail') || '';
    let rememberedPassword = localStorage.getItem('rememberedPassword') || '';

    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser && rememberMe) {
      const { email, password } = JSON.parse(currentUser);
      rememberedEmail = email;
      rememberedPassword = password;
    }
    this.loginForm = this.fb.group({
      email: [rememberedEmail, Validators.required],
      password: [rememberedPassword, Validators.required],
      rememberMe: [rememberMe]
    });
  }

  submitForm(): void {
    const { email, password } = this.loginForm.value;
    this.rememberMe = this.loginForm.get('rememberMe')?.value;

    if (this.rememberMe) {
      localStorage.setItem('rememberedEmail', email);
      localStorage.setItem('rememberedPassword', password);
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('rememberedEmail');
      localStorage.removeItem('rememberedPassword');
      localStorage.removeItem('rememberMe');
    }
    this.usersService.loginSubmit(email, password, this.rememberMe);
    this.showErrorMessage = !this.usersService.getIsAuthenticated();

    if (this.usersService.getIsAuthenticated()) {
      this.modalRef.close();
    }
  }

  openRegister() {
    this.modalRef.close();
    this.usersService.openRegister();
  }
}
