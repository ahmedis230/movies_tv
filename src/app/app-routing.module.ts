import { PeopledetailsComponent } from './peopledetails/peopledetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TVshowsComponent } from './tvshows/tvshows.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LogoutComponent } from './logout/logout.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard] ,component:HomeComponent},
  {path:'about', canActivate:[AuthGuard] , component:AboutComponent},
  {path:'register', component:RegisterComponent},
  {path:'logout', component:LogoutComponent},
  {path:'tvshows', canActivate:[AuthGuard] ,component:TVshowsComponent},
  {path:'moviedetails/:id', canActivate:[AuthGuard] ,component:MoviedetailsComponent},
  {path:'tvdetails/:id', canActivate:[AuthGuard] ,component:TvdetailsComponent},
  {path:'peopledetails/:id', canActivate:[AuthGuard] ,component:PeopledetailsComponent},
  {path:'login', component:LoginComponent},
  {path:'newmovies', canActivate:[AuthGuard] ,loadChildren:()=>import('./newmovies/newmovies.module').then((x)=>x.NewmoviesModule)},
  {path:'newtv', canActivate:[AuthGuard] ,loadChildren:()=>import('./newtv/newtv.module').then((x)=>x.NewtvModule)},
  {path:'**', component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
