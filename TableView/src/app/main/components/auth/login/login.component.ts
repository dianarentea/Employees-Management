import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { EmployeesService } from 'src/app/main/services/employees.service';
import { UsersService } from 'src/app/main/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showErrorMessage = false; 

  constructor(private fb: FormBuilder, private usersService:UsersService, private modalRef:NzModalRef) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    const { email, password } = this.loginForm.value;
    this.usersService.loginSubmit(email, password);
    this.showErrorMessage = !this.usersService.getIsAuthenticated(); // Afiseaza mesajul de eroare daca autentificarea a esuat
  
    if (this.usersService.getIsAuthenticated()) {
      this.modalRef.close();
    }
  }
  
  openRegister()
  {
    this.usersService.openRegister();
  }
}
