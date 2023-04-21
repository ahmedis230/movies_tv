import { Component,OnInit } from '@angular/core';
import { MoviesService } from './../../movies.service';

@Component({
  selector: 'app-topratedtv',
  templateUrl: './topratedtv.component.html',
  styleUrls: ['./topratedtv.component.scss']
})
export class TopratedtvComponent {

  topratedtv:any[]=[]
  imgprefix:string='https://image.tmdb.org/t/p/w500'
  pages:number[]=[]
  
  
  constructor(private _MoviesService:MoviesService){}
  ngOnInit():void{
    this.pages= new Array(10).fill('').map( (x,i)=> i+1 )

    this._MoviesService.getonairtv(1).subscribe({
      next:(response)=> this.topratedtv= response.results
    })

}
test(pagenumber:number){

  this._MoviesService.getonairtoday(pagenumber).subscribe({
    next:(response)=> this.topratedtv=response.results
  })
}

}





