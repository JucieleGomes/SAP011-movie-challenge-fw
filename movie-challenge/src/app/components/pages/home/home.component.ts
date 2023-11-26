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
  orders: any;
  moviesByGender: any[]=[];
  selectedGenreId?: any = 0;
  selectedOrder: any;
  search: string = '';
  searchMovie: any;
  allMovies:any[] = [];

  constructor(private readonly _SERVICE: MoviesDataBaseService) {}
 //Chama os serviços assim que o servidor é inciado
 // A lista de generos é chamada antes dos filmes, para que se o filtro de genero
 // for selecionado a lista já esteja carregada e não haja delay
  ngOnInit(): void {
    this.genderList();
    this.loadMovies();
  }

  //Atualiza currentPage com o número da página.
onPageChanged(page: number) {
  console.log(page);
  this.currentPage = page;
    this.loadMovies();
}

//Chama o serviço para obter filmes com a página atual e de acordo com o filtro e ordenação
//selecionado.
loadMovies() {
  this._SERVICE.getMovies(this.currentPage, this.selectedGenreId?this.selectedGenreId:undefined, this.selectedOrder? this.selectedOrder:undefined).subscribe({
    next: (data: any) => {
      this.totalPages = data.total_pages;
      this.movies = data.results;
    }
  });
}

//Obtém a lista de gêneros chamando o serviço.
genderList() {
  this._SERVICE.getGenderList().subscribe({
    next: (data: any) => {
      this.genres = data.genres;  
    }
  });
}

// Atualiza selectedGenreId com o valor do evento e chama getMoviesWhithGender.
getSelectedGener(event:any){
  console.log(event);
     this.selectedGenreId = Number(event);
     this.getMoviesWhithGender(Number(event)); 
}

//Obtém filmes por gênero chamando o serviço.
getMoviesWhithGender(id:number){
  this._SERVICE.getMoviesByGender(id).subscribe({
    next: (data:any)=>{
      this.moviesByGender = data;
      this.totalPages = data.total_pages;
      this.movies = data.results; 
    }
  })
}

 //Atualiza a selectedOrder com o valor do evento e chama loadMoviesWhitSelectedOrder.
  getSelectedOrder(event: string) {
    this.selectedOrder = event;
    // this.loadMoviesWhitSelectedOrder();
    this.loadMovies();
  }

//Atualiza a searchMovie com o valor do evento .
getSearch(event:any){
  this.searchMovie = event; 
}

//Verifica se o o value buscado está presente na lista de filmes
searchMoviesList() {
  this._SERVICE.getMovies(this.currentPage).subscribe((data) => {
    this.allMovies = data.results;
    const value = this.searchMovie.toLowerCase();
    this.movies = this.allMovies.filter((movie) => {
    return movie.title.toLowerCase().includes(value);
    });
  }); 
}}










