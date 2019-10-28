import { Component, OnInit } from '@angular/core';
import { loginModel } from '../data/loginModel';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  loginInstance : loginModel ={

    employeeId:null,
    password :null,
    rememberMe : true
  }

  employeedetail : EmployeeDetailComponent;
  constructor(private router : Router) { }

  ngOnInit() {
  }
onSubmit(loginForm : NgForm){
 
if(this.loginInstance.employeeId=='admin' && this.loginInstance.password=='admin')
{
  localStorage.setItem('employeeId', 'admin');
  this.router.navigate(['/employees']);
  
}
else if(this.loginInstance.employeeId=="user" && this.loginInstance.password=='user')
{
  this.router.navigate(['/dashboard']);
  localStorage.setItem('employeeId', 'user');

}
}
}
