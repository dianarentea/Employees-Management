import { Injectable } from '@angular/core';
import{User} from '../interfaces/user';
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

  private usersList: User[] = usersData;
  private currentUsername: string = '';
  private currentUserEmail: string = '';
  
  usersListSubject=new Subject<User[]>();
  usersListObservable=this.usersListSubject.asObservable();
  private isAuthenticated: boolean = false;


  constructor(private modalService: NzModalService, private router:Router, private httpClient:HttpClient) {}

  get UsersList(): User[] {
    return this.usersList;
  }
  get CurrentUsername(): string {
    return this.currentUsername;
  }
  get CurrentUserEmail(): string {
    return this.currentUserEmail;
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
loginSubmit(email: string, password: string,rememberMe: boolean): void {
  const user = this.usersList.find(u => u.email === email && u.password === password);
  this.currentUsername = user?.lastname || '';
  console.log(this.currentUserEmail)
  this.currentUserEmail = user?.email || '';
  if (user) 
  {
    this.isAuthenticated = true;
    if (rememberMe) 
    {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    this.router.navigate(['/home-view']);
  } 
  else 
  {
    this.isAuthenticated = false;
    console.log('Auth has failed!');
  }
}

registerSubmit(email:string, firstname:string, lastname:string, password:string): void
{
  console.log("registerSubmit");
  const user:User={email,firstname,lastname,password};
  this.usersList.push(user);
  this.usersListSubject.next([...this.usersList]);
  this.currentUsername=lastname;
  this.router.navigate(['/home-view']);
}

getIsAuthenticated(): boolean {
  return this.isAuthenticated;
}

openMyTrips(): void {
  this.router.navigate(['/my-trips']);
}
openAllTrips(): void {
  this.router.navigate(['/all-trips']);
}
logout(): void {
  this.isAuthenticated = false;
  this.router.navigate(['']);
}

}
