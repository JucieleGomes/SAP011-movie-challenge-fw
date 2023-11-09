import { Component } from '@angular/core';
import { MoviesDataBaseService } from 'src/app/services/movies-data-base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private readonly _SERVICE: MoviesDataBaseService 
  ){ this._SERVICE.getMovies().subscribe({
    next: (data:any)=>{
    console.log(data);
    }
  })

  }

}
