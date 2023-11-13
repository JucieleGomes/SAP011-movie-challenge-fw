
import { Component,OnInit } from '@angular/core';
import { MoviesDataBaseService } from 'src/app/services/movies-data-base.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

 movie?: any;


  constructor(
    private _SERVICE: MoviesDataBaseService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {

    this.showMovieDetails()

  }

  showMovieDetails(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this._SERVICE.getMovie(id).subscribe(data => {
      this.movie = data; 
    });
  }
}




