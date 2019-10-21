import { Component, OnInit } from '@angular/core';
import { loginModel } from '../data/loginModel';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private router : Router) { }

  ngOnInit() {
  }
onSubmit(loginForm : NgForm){
if(this.loginInstance.employeeId=='admin' && this.loginInstance.password=='admin')
{
  this.router.navigate(['/employees']);
}
else if(this.loginInstance.employeeId=="user" && this.loginInstance.password=='user')
{
  this.router.navigate(['/dashboard']);
}
}
}
