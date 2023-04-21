import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

constructor(private _moviesservice:MoviesService){}
trendingtv:any[]=[]
trendingperson:any[]=[]
imgprefix:string='https://image.tmdb.org/t/p/w500'
trendingmovies:any[]=[]


customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 6
    }
  },
  nav: true
}


ngOnInit():void{
  this._moviesservice.gettrending('movie').subscribe({
    next:(response)=> this.trendingmovies= response.results.slice(0,10)

  })
  this._moviesservice.gettrending('tv').subscribe({
    next:(response)=> this.trendingtv= response.results.slice(0,10)
  })
  this._moviesservice.gettrending('person').subscribe({
    next:(response)=> this.trendingperson= response.results.slice(0,10)
  })
  
}

}
