import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  moviesByGender: string | undefined;
  selectedGenreId?: string;
  // selectedOrder: any;
  search: string = '';
  searchMovie: any;
  allMovies:any[] = [];
  selectedOrder?: string = 'popularity.desc';


  constructor
  (private readonly _SERVICE: MoviesDataBaseService,
   private readonly route: ActivatedRoute) {}
 //Chama os serviços assim que o servidor é inciado
 // A lista de generos é chamada antes dos filmes, para que se o filtro de genero
 // for selecionado a lista já esteja carregada e não haja delay
  ngOnInit(): void {

    const queryParams = this.route.snapshot.queryParamMap;
    if (
      queryParams.get('genres') !== undefined &&
      queryParams.get('order') !== undefined &&
      queryParams.get('pageNumber') !== undefined
    ) {
      this.selectedGenreId = queryParams.get('genres')?.toString();
      this.selectedOrder = queryParams.get('order')?.toString();

      const pageNumberParam = queryParams.get('pageNumber');
      this.currentPage = pageNumberParam !== null ? parseInt(pageNumberParam, 10) : 1;
      

    this.genderList();
    this.loadMovies();
    
  }
  }


  //Atualiza currentPage com o número da página.
  onPageChanged(page: number) {
    console.log(page);
    this.currentPage = page;
    // if(this.selectedGenreId&&this.selectedOrder){
    //   this.loadMoviesWithGenderAndOrder();
    // } else if (this.selectedGenreId) {
    //   this.loadMoviesWithGender(); 
    // } else if (this.selectedOrder) {
    //   this.loadMoviesWithOrder(); 
    // } else {
      this.loadMovies();
    // }
  }
  

//Chama o serviço para obter filmes com a página atual e de acordo com o filtro e ordenação
//selecionado.
// loadMovies() {
//   this._SERVICE.getMovies(this.currentPage, this.selectedGenreId, this.selectedOrder).subscribe({
//     next: (data: any) => {
//       this.totalPages = data.total_pages;
//       this.movies = data.results;
//     }
//   });
// }

loadMovies() {
  const genreParam = this.selectedGenreId ? this.selectedGenreId : undefined;
  const orderParam = this.selectedOrder ? this.selectedOrder : undefined;

  this._SERVICE.getMovies(this.currentPage, genreParam, orderParam).subscribe({
    next: (data: any) => {
      this.totalPages = data.total_pages;
      this.movies = data.results;
    }
  });
}



// loadMoviesWithGender() {
//   this._SERVICE.getMovies(this.currentPage, this.selectedGenreId).subscribe({
//     next: (data: any) => {
//       this.totalPages = data.total_pages;
//       this.movies = data.results;
//     }
//   });
// }

// loadMoviesWithOrder() {
//   this._SERVICE.getMovies(this.currentPage, undefined, this.selectedOrder).subscribe({
//     next: (data: any) => {
//       this.totalPages = data.total_pages;
//       this.movies = data.results;
//     }
//   });
// }

// loadMoviesWithGenderAndOrder() {
//   this._SERVICE.getMovies(this.currentPage, this.selectedGenreId, this.selectedOrder).subscribe({
//     next: (data: any) => {
//       this.totalPages = data.total_pages;
//       this.movies = data.results;
//     }
//   });
// }

//Obtém a lista de gêneros chamando o serviço.
genderList() {
  this._SERVICE.getGenderList().subscribe({
    next: (data: any) => {
      console.log(data); 
      this.genres = data.genres;  
    }
  });
}

// Atualiza selectedGenreId com o valor do evento e chama getMoviesWhithGender.
getSelectedGener(event:any){
  console.log(event);
     this.selectedGenreId = event;
     this.getMoviesWhithGender(event);
     this.loadMovies();
}

//Obtém filmes por gênero chamando o serviço.
getMoviesWhithGender(id:string){
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
    // this.loadMoviesWithOrder();
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











