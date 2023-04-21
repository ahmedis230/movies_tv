import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(trendingmovies:any[],term:string): any[]{
    return trendingmovies.filter((movie)=> movie.title.toLowerCase().includes(term.toLowerCase()))
  }

}
