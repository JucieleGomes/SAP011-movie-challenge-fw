
import { Component,OnInit } from '@angular/core';
import { MoviesDataBaseService } from 'src/app/services/movies-data-base.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

 movie?: any;
 movieLoaded: any;
 genres?: string = '';
 order?: string = '';
 pageNumber?: string = '';


  constructor(
    private _SERVICE: MoviesDataBaseService,
    private route: ActivatedRoute,
    private _SPINNER : NgxSpinnerService,
  ) {
    this._SPINNER.show()
  }
   
  ngOnInit(): void {
    console.log("teste", this.route.snapshot.queryParamMap.get('order'));
    this.genres = this.route.snapshot.queryParamMap.get('genres')?.toString();
    this.order = this.route.snapshot.queryParamMap.get('order')?.toString();
    this.pageNumber = this.route.snapshot.queryParamMap.get('pageNumber')?.toString();
    this.showMovieDetails() 
  }

  showMovieDetails(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this._SERVICE.getMovie(id).subscribe(data => {
      this.movie = data;  
      setTimeout(()=>{
        this._SPINNER.hide();
      },50);
      this.movieLoaded = true; 
    });
  }
}




