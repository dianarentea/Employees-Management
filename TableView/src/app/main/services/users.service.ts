import { Injectable } from '@angular/core';
import{Users} from '../interfaces/users';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import usersData from './users.json';
import { Subject } from 'rxjs';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersList: Users[] = usersData;
  usersListSubject=new Subject<Users[]>();
  usersListObservable=this.usersListSubject.asObservable();
  private isAuthenticated: boolean = false;

  constructor(private modalService: NzModalService, private router:Router, private httpClient:HttpClient) {}

  get UsersList(): Users[] {
    return this.usersList;
  }
   openLogin(): NzModalRef {
    const modal: NzModalRef = this.modalService.create({
      nzTitle: 'Login',
      nzContent: LoginComponent,
      nzFooter: null,
      nzComponentParams: {
        
      },
    });
    return modal;

  }
  openRegister(): NzModalRef {
    const modal: NzModalRef = this.modalService.create({
      nzTitle: 'Register',
      nzContent: RegisterComponent,
      nzFooter: null,
      nzComponentParams: {
        
      },
    });
    return modal;
}
loginSubmit(email: string, password: string): void {
  const user = this.usersList.find(u => u.email === email && u.password === password);

  if (user) 
  {
    this.isAuthenticated = true;
    this.router.navigate(['/home-view']);
  } 
  else 
  {
    this.isAuthenticated = false;
    console.log('Auth has failed!');
  }
}

getIsAuthenticated(): boolean {
  return this.isAuthenticated;
}

registerSubmit(user: Users): void
{
  this.usersList.push(user);
  this.usersListSubject.next([...this.usersList]);
  this.router.navigate(['/home-view']);
  // Realizează cererea HTTP pentru a actualiza fișierul users.json
  this.httpClient.put('/api/users', this.usersList)
    .subscribe(
      () => console.log('Fișierul users.json a fost actualizat cu succes!'),
      error => console.error('A apărut o eroare la actualizarea fișierului users.json:', error)
    );
}

}
