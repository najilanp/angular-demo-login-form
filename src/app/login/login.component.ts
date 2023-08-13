import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
//property
title:string="Login Form"
imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCD3GkdMpP-CZxPAvsipaAYXeKlWR6bQV_Q&usqp=CAU"

username:string=""
password:string=""

constructor(private logRouter:Router, private loginService:DataService){}

usernameChange(event:any){
console.log(event.target.value);
this.username=event.target.value

}
userpasswordChange(event:any){
console.log(event.target.value);
this.password=event.target.value
}
login(){
 if(this.username&&this.password){
  this.loginService.loginUsername=this.username
 alert(`username:${this.username} password:${this.password}`)
 this.logRouter.navigateByUrl("dashboard")
 }else{
  alert("please fill the form completely")
 }
}
}

