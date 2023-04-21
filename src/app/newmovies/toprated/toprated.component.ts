import { MoviesService } from './../../movies.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.scss']
})
export class TopratedComponent {

  imgprefix:string='https://image.tmdb.org/t/p/w500'
  pages:number[]=[]
  toprated:any[]=[]
  
  term:string=''

constructor(private _moviesservice:MoviesService){}
ngOnInit():void{
  this.pages= new Array(10).fill('').map( (x,i)=> i+1 )

this._moviesservice.gettoprated(1).subscribe({
  next:(response)=>this.toprated= response.results
})
}
test(pagenumber:number){
  this._moviesservice.gettoprated(pagenumber).subscribe({
    next:(response)=> this.toprated=response.results
  })
}

}
