import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TVshowsComponent {
constructor(private _MoviesService:MoviesService, private _ActivatedRoute:ActivatedRoute){}


tvid:string=''
tvshows:any[]=[]
imgprefix:string='https://image.tmdb.org/t/p/w500'
error:string='erroooooooooooooooooooor'

ngOnInit(){
  

  this._MoviesService.gettrending('tv').subscribe(
    {next:(response)=> this.tvshows= response.results
  })
}
}
