import { SharedmodulesModule } from './../sharedmodules/sharedmodules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewtvRoutingModule } from './newtv-routing.module';
import { PopulartvComponent } from './populartv/populartv.component';
import { TopratedtvComponent } from './topratedtv/topratedtv.component';
import { OnairtvComponent } from './onairtv/onairtv.component';
import { OnairtodayComponent } from './onairtoday/onairtoday.component';



@NgModule({
  declarations: [
    PopulartvComponent,
    TopratedtvComponent,
    OnairtvComponent,
    OnairtodayComponent,
    
  ],
  imports: [
    CommonModule,
    NewtvRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedmodulesModule
  ]
})
export class NewtvModule { }
