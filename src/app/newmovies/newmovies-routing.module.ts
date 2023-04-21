import { UpcomingComponent } from './upcoming/upcoming.component';
import { TopratedComponent } from './toprated/toprated.component';
import { PopularmoviesComponent } from './popularmovies/popularmovies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:UpcomingComponent},
  {path:'popularmovies', component:PopularmoviesComponent},
  {path:'toprated', component:TopratedComponent},
  {path:'upcoming', component:UpcomingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewmoviesRoutingModule { }
