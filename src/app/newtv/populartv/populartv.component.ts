import { Component,OnInit } from '@angular/core';
import { MoviesService } from './../../movies.service';

@Component({
  selector: 'app-populartv',
  templateUrl: './populartv.component.html',
  styleUrls: ['./populartv.component.scss']
})
export class PopulartvComponent {

  populartv:any[]=[]
  imgprefix:string='https://image.tmdb.org/t/p/w500'
  pages:number[]=[]
  
  
  constructor(private _MoviesService:MoviesService){}
  ngOnInit():void{
    this.pages= new Array(10).fill('').map( (x,i)=> i+1 )

    this._MoviesService.getonairtoday(1).subscribe({
      next:(response)=> this.populartv= response.results
    })
  }
  test(pagenumber:number){
    this._MoviesService.getonairtoday(pagenumber).subscribe({
      next:(response)=> this.populartv=response.results
    })
  }

}





  
  
  







