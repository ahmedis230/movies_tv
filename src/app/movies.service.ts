import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpclient:HttpClient) { }

gettrending(mediatype:string):Observable<any>
{

  return this._httpclient.get(`https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=005a0a302aacd538351b06eca58dba70`)
}
getmoviedetails(id:string):Observable<any>
{
return this._httpclient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=005a0a302aacd538351b06eca58dba70&language=en-US`)
}
gettvdetails(id:string):Observable<any>{
return this._httpclient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=005a0a302aacd538351b06eca58dba70&language=en-US`)
}
getpeopledetails(id:string):Observable<any>{
return this._httpclient.get(`https://api.themoviedb.org/3/person/${id}?api_key=005a0a302aacd538351b06eca58dba70&language=en-US`)
}
getmoviesbypagination(pagenum:number):Observable<any>
{
return this._httpclient.get(`https://api.themoviedb.org/3/discover/movie?api_key=005a0a302aacd538351b06eca58dba70&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pagenum}`)
}

getpopularmovies(pagenum:number):Observable<any>
{
return this._httpclient.get(`https://api.themoviedb.org/3/movie/popular?api_key=005a0a302aacd538351b06eca58dba70&language=en-US&page=${pagenum}`)
}
gettoprated(pagenum:number):Observable<any>{
  return this._httpclient.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=005a0a302aacd538351b06eca58dba70&language=en-US&page=${pagenum}`)
}
getupcoming(pagenum:number):Observable<any>{
  return this._httpclient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=005a0a302aacd538351b06eca58dba70&language=en-US&page=${pagenum}`)
}
gettv(id:string):Observable<any>{
return this._httpclient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=005a0a302aacd538351b06eca58dba70&language=en-US`)
}
getonairtv(pagenum:number):Observable<any>{
return this._httpclient.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=005a0a302aacd538351b06eca58dba70&language=en-US&page=${pagenum}`)
}
getpopulartv(pagenum:number):Observable<any>{
return this._httpclient.get(`https://api.themoviedb.org/3/tv/popular?api_key=005a0a302aacd538351b06eca58dba70&language=en-US&page=${pagenum}`)
}
getonairtoday(pagenum:number):Observable<any>{
return this._httpclient.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=005a0a302aacd538351b06eca58dba70&language=en-US&page=${pagenum}`)
}
getopratedtv(pagenum:number):Observable<any>{
return this._httpclient.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=005a0a302aacd538351b06eca58dba70&language=en-US&page=${pagenum}`)
}
}
