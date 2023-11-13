
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
  ) {console.log(this.route.snapshot.paramMap);}

  ngOnInit(): void {

    this.showMovieDetails()

  }

  showMovieDetails(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    // const id = 507089;
    console.log(this.route.snapshot.paramMap);
    
    this._SERVICE.getMovie(id).subscribe(data => {
      this.movie = data;
      console.log("movie-details", data);
    });
  }
  
}




