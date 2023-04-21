import { MoviesService } from './../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.scss']
})
export class PeopledetailsComponent {

  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService){}

  personid:string=''
  peopledetails:any
  imgprefix:string='https://image.tmdb.org/t/p/w500'
  
  ngOnInit(){
    this.personid= this._ActivatedRoute.snapshot.params['id']
    this._MoviesService.getpeopledetails(this.personid).subscribe({
      next:(response)=> this.peopledetails =response
    })
  }


}
