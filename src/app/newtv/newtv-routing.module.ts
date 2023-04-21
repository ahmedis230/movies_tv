import { OnairtodayComponent } from './onairtoday/onairtoday.component';
import { OnairtvComponent } from './onairtv/onairtv.component';
import { TopratedtvComponent } from './topratedtv/topratedtv.component';
import { PopulartvComponent } from './populartv/populartv.component';
import { TVshowsComponent } from './../tvshows/tvshows.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:TVshowsComponent},
  {path:'populartv', component:PopulartvComponent},
  {path:'topratedtv', component:TopratedtvComponent},
  {path:'onairtv', component:OnairtvComponent},
  {path:'onairtoday', component:OnairtodayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewtvRoutingModule { }
