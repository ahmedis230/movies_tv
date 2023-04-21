import { MoviesService } from './../../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onairtv',
  templateUrl: './onairtv.component.html',
  styleUrls: ['./onairtv.component.scss']
})
export class OnairtvComponent {

onairtv:any[]=[]
imgprefix:string='https://image.tmdb.org/t/p/w500'
pages:number[]=[]


constructor(private _MoviesService:MoviesService){}
ngOnInit():void{
  this.pages= new Array(10).fill('').map( (x,i)=> i+1 )

  this._MoviesService.getonairtv(1).subscribe({
    next:(response)=> this.onairtv= response.results
  })
}
test(pagenumber:number){
  this._MoviesService.getonairtoday(pagenumber).subscribe({
    next:(response)=> this.onairtv=response.results
  })
}
}
