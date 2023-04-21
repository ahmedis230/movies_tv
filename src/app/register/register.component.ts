import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
errormsg:string=''
  registerform:FormGroup=new FormGroup({
   
    first_name:new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(8)]),
    last_name:new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(8)]),
    email:new FormControl(null,[Validators.required, Validators.email]),
    password:new FormControl(null,[Validators.required, Validators.pattern(/^[a-z]{1}[0-9]{2}$/)]),
    age:new FormControl(null,[Validators.required, Validators.min(10),Validators.max(80)])
   
  })

  constructor(private _authservice:AuthService, private _Router:Router){}

  register(data:FormGroup){
    
    this._authservice.signup(data.value).subscribe(
      {
        next:(data)=>{
          if (data.message=='success') {
            this._Router.navigate(['/login'])
          }
else{
this.errormsg= data.message
}

        }
      }
    )
    
  }
ngOnInit():void{

}
}
