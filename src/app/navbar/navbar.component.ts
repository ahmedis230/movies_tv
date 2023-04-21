import { Component,  OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  islogin:boolean=false;

constructor(private _AuthService:AuthService , private _movservice:MoviesService){}



ngOnInit(){

this._AuthService.userdata.subscribe({
  next:()=>{

    if (this._AuthService.userdata.getValue()!=null) {
      this.islogin=true
      }
      else{
    this.islogin=false
      }
  }
})
  
}
logout(){
  this._AuthService.signout()
}

}
