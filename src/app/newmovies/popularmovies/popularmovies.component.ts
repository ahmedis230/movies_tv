import { SearchPipe } from './../../search.pipe';
import { MoviesService } from './../../movies.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-popularmovies',
  templateUrl: './popularmovies.component.html',
  styleUrls: ['./popularmovies.component.scss']
})
export class PopularmoviesComponent {
  imgprefix:string='https://image.tmdb.org/t/p/w500'
  popularmovies:any[]=[]
  pages:number[]=[]
  term:string=''

constructor(private _MoviesService:MoviesService){

}
ngOnInit():void{
  this.pages= new Array(10).fill('').map( (x,i)=> i+1 )

this._MoviesService.getpopularmovies(1).subscribe({
  next:(response)=>this.popularmovies= response.results
})
}
test(pagenumber:number){
  this._MoviesService.getpopularmovies(pagenumber).subscribe({
    next:(response)=> this.popularmovies=response.results
  })
}
}


