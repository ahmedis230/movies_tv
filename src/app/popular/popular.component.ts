import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent {
  imgprefix:string='https://image.tmdb.org/t/p/w500'
  popularmovies:any[]=[]
  pages:number[]=[]
  term:string=''



  constructor(private _MoviesService:MoviesService){}

  ngOnInit():void{}
    
    getpop(){
      this._MoviesService.getpopularmovies(1).subscribe({
        next:(response)=>this.popularmovies= response.results.slice(0,10)
  
    }
      )
  


}
}


