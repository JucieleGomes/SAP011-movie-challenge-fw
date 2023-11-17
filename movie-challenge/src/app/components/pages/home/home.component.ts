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
  selectedGenreId?: any = 0;
  selectedOrder?: string;

  constructor(private readonly _SERVICE: MoviesDataBaseService) {}

  ngOnInit(): void {
    this.genderList();
    this.loadMovies();
  }

  // getMorePopulary(event:string){
  //   console.log();
  //   this.selectedOrder = event;
  //   this.orderBy (event)
  // }

  getSelectedGener(event:any){
    console.log(event);
    this.selectedGenreId = Number(event);
    this.getMoviesWhithGender(Number(event)); 
  }

  onPageChanged(page: number) {
    console.log(page);
    this.currentPage = page;
    this.loadMovies();
    this.loadMoviesWithGener();
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

  loadMoviesWithGener(){
    this._SERVICE.getMovies(this.currentPage, this.selectedGenreId, ).subscribe({
      next: (data: any) => {
        console.log(data);
        this.totalPages = data.total_pages;
        this.movies = data.results;
        console.log(this.currentPage, this.selectedGenreId); 
      }
    });
  }
  
  genderList() {
    this._SERVICE.getGenderList().subscribe({
      next: (data: any) => {
        this.genres = data.genres;  
        console.log("generos:", this.genres);
      }
    });
  }

  getMoviesWhithGender(id:number){
    this._SERVICE.getMoviesByGender(id).subscribe({
      next: (data:any)=>{
        this.moviesByGender = data;
        console.log("Filmes filtrados por genero:", data);
        this.totalPages = data.total_pages;
        this.movies = data.results; 
      }
    })
  }

  // orderBy(event: any){
  //   this._SERVICE.getSort('vote_count.desc').subscribe({
  //     next: (data:any)=>{
  //       this.orders = data;
  //       this.loadMovies();
  //       console.log("Filmes ordenados:", data);
  //     }
  //   })
    

  // }
}
