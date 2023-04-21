import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'watch'
})
export class WatchPipe implements PipeTransform {

  transform(movietitle:string): string {
    return `watch: ${movietitle}`;
  }

}
