import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent {
constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService){}

movieid:string=''
moviedetails:any
imgprefix:string='https://image.tmdb.org/t/p/w500'

ngOnInit(){
  this.movieid= this._ActivatedRoute.snapshot.params['id']
  this._MoviesService.getmoviedetails(this.movieid).subscribe({
    next:(response)=> this.moviedetails =response
  })
}
}
