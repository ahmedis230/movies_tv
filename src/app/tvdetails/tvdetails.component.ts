import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent {
  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService){}

  tvid:string=''
  tvdetails:any
  imgprefix:string='https://image.tmdb.org/t/p/w500'

  ngOnInit(){
    this.tvid= this._ActivatedRoute.snapshot.params['id']
    this._MoviesService.gettvdetails(this.tvid).subscribe({
      next:(response)=> this.tvdetails =response
    })
  }

}
