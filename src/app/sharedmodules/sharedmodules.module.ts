import { SearchPipe } from './../search.pipe';
import { WatchPipe } from './../watch.pipe';
import { SeemorePipe } from './../seemore.pipe';
import { NgModule } from '@angular/core';

SeemorePipe
@NgModule({
  declarations: [SeemorePipe,WatchPipe,SearchPipe],
  exports: [SeemorePipe,WatchPipe,SearchPipe],
})
export class SharedmodulesModule { }
