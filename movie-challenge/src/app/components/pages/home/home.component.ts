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
  orders: any[] = [];
  moviesByGender: any[]=[];
  selectedGenreId?: number;
  selectedOrder?: string;

  constructor(private readonly _SERVICE: MoviesDataBaseService) {}

  ngOnInit(): void {
    this.loadMovies();
    this.genderList();
    this.orderBy();
    this.getMoviesWhithGender();
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
    this._SERVICE.getGenderList().subscribe({
      next: (data: any) => {
        this.genres = data.genres;  
        console.log("generos:", data);
      }
    });
  }

  onGenreSelected(genreId: number) {
    this.selectedGenreId = genreId;
    this.loadMovies();  
  }

  getMoviesWhithGender(){
    this._SERVICE.getMoviesByGender(28).subscribe({
      next: (data:any)=>{
        this.moviesByGender = data;
        console.log("Filmes filtrados por genero:", data);
        
      }
    })
  }

  orderBy(){
    this._SERVICE.getSort('vote_count.desc').subscribe({
      next: (data:any)=>{
        this.orders = data;
        this.loadMovies();
        console.log("Filmes ordenados:", data);
      }
    })
    

  }
}
