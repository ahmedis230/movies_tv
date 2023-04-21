import { MoviesService } from './../../movies.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent {
  imgprefix:string='https://image.tmdb.org/t/p/w500'
  upcoming:any[]=[]
  pages:number[]=[]
  term:string=''

  constructor(private _moviesservice:MoviesService){}
  ngOnInit():void{
    this.pages= new Array(10).fill('').map( (x,i)=> i+1 )

  this._moviesservice.getupcoming(1).subscribe({
    next:(response)=>this.upcoming= response.results
  })
  }
  test(pagenumber:number){
    this._moviesservice.getupcoming(pagenumber).subscribe({
      next:(response)=> this.upcoming=response.results
    })
  }
  

}
