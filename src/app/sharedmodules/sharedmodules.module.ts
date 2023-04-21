import { SearchPipe } from './../search.pipe';
import { WatchPipe } from './../watch.pipe';
import { SeemorePipe } from './../seemore.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

SeemorePipe
@NgModule({
  declarations: [SeemorePipe,WatchPipe,SearchPipe],
  exports: [SeemorePipe,WatchPipe,SearchPipe],
})
export class SharedmodulesModule { }
