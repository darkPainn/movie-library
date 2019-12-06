import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { UpdateMovieComponent } from './movies/update-movie/update-movie.component';
import { DuckHuntComponent } from './duck-hunt/duck-hunt.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'movies', component:MoviesComponent},
  {path:'home',component:HomeComponent},
  {path:'update-movie/:id', component:UpdateMovieComponent},
  {path:'duck-hunt', component:DuckHuntComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
