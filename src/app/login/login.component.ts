import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  
export class LoginComponent implements OnInit {

  loginform:FormGroup=new FormGroup({
    
    email:new FormControl(null,[Validators.required, Validators.email]),
    password:new FormControl(null,[Validators.required, Validators.pattern(/^[a-z]{1}[0-9]{2}$/)])
  })

constructor(private _AuthService:AuthService, private _Router:Router){}

errormsg:string=''


  login(data:FormGroup){
    console.log(data.value);
    
this._AuthService.signin(data.value).subscribe({
  next:(data)=>{
  console.log(data);

if (data.message== 'Login successful') {
  localStorage.setItem('usertoken', data.token)
  this._AuthService.saveUserData();
 this._Router.navigate(['/home'])
}
else{
this.errormsg= data.message
}

  }
})

  }
  

  ngOnInit(): void {
      
  }
  gotoregister(){
    this._Router.navigate(['/register'])
  }

}
