
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewmoviesRoutingModule } from './newmovies-routing.module';
import { PopularmoviesComponent } from './popularmovies/popularmovies.component';
import { TopratedComponent } from './toprated/toprated.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SharedmodulesModule } from '../sharedmodules/sharedmodules.module';

@NgModule({
  declarations: [
    PopularmoviesComponent,
    TopratedComponent,
   
    UpcomingComponent,
    


    
  ],
  imports: [
    CommonModule,
    NewmoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedmodulesModule,
    
  ]
})
export class NewmoviesModule { }
