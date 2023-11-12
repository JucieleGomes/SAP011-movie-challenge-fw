import { Component, Input, OnInit } from '@angular/core';
import { MoviesDataBaseService } from 'src/app/services/movies-data-base.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

 @Input() movie: any[]=[]

  constructor(
    private _SERVICE: MoviesDataBaseService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this._SERVICE.getMovie(id).subscribe(data => {
      this.movie = data;
      console.log("movie-details", data);
    });
  }
}
