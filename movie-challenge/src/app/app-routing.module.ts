import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MovieDetailsComponent } from './components/pages/home/movie-details/movie-details.component';
const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "movie-details/:id", component: MovieDetailsComponent},
  {path: "Home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
