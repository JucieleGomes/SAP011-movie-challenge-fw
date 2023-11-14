import { Component, OnInit } from '@angular/core';
import { MoviesDataBaseService } from 'src/app/services/movies-data-base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//OnIniti é um método do ciclo de vida dos componentes
//Ele inicia a busca de dados assim que o componente é iniciado, 
//mesmo antes de renderizar a página
export class HomeComponent implements OnInit {

  currentPage: number = 1;
  //O numero total de páginas é pego dinamicamente na API por isso ele é inicializado em zero.
  totalPages: number = 0;
  movies: any[] = [];
  genres: any[] = [];

  constructor(private readonly _SERVICE: MoviesDataBaseService) {}

  ngOnInit(): void {
    this.loadMovies();
    this.genderList();
  }

  onPageChanged(page: number) {
    console.log(page);
    this.currentPage = page;
    this.loadMovies();
  }

  loadMovies() {
    this._SERVICE.getMovies(this.currentPage).subscribe({
      next: (data: any) => {
        console.log(data);
        this.totalPages = data.total_pages;
        this.movies = data.results;
      }
    });
  }

  genderList() {
    this._SERVICE.getMovieByGender().subscribe({
      next: (data:any) => {
        this.genres = data.genres;
      }
    })
  }

  // orderBy(){
  //   this._SERVICE.getSort().subscribe({
  //     next: (data:any)=>{
  //       console.log("sort:", data);
  //     }
  //   })
  // }
}
