import { Component, OnInit} from '@angular/core';
import { MoviesDataBaseService } from 'src/app/services/movies-data-base.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
movies: any[]=[];
movie: any[]=[];

  constructor(
    private readonly _SERVICE: MoviesDataBaseService
  ){

  }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(){
    this._SERVICE.getMovies().subscribe({
      next: (data:any)=>{
      console.log(data);
      this.movies = data.results;
      }
    })
  }
}
