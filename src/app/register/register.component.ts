import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   
  constructor(private regRouter:Router){}

  register(uname:any,password:any){
  //  alert(`${uname.value},${password.value}`)
   //navigate to login page-navigatebyURL(path)method-define class router
   this.regRouter.navigateByUrl("")
  }

}
