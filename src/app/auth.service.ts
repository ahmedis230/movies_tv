import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,BehaviorSubject} from 'rxjs'
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
Router


@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseurl:string='https://sticky-note-fe.vercel.app/'
  constructor(private _httpclient:HttpClient, private _Router:Router) { 
    if (localStorage.getItem('usertoken')) {
      this.saveuserdata()
    }
  }

userdata:any= new BehaviorSubject(null)
saveuserdata(){
  let encodeddata=JSON.stringify( localStorage.getItem('usertoken'))
  let decodedata= jwtDecode(encodeddata)
  this.userdata.next(decodedata);
  console.log(this.userdata);
  
}

signup(data:object):Observable<any>
{
  return this._httpclient.post(this.baseurl+'signup', data)
}
signin(data:object):Observable<any>
{
  return this._httpclient.post(this.baseurl+'signin', data)
}
signout(){
  localStorage.removeItem('usertoken')
  this.userdata.next(null)
  this._Router.navigate(['/login'])


}

}
