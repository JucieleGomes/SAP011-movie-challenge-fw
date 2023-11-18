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

  constructor(private readonly _SERVICE: MoviesDataBaseService) {}

  ngOnInit(): void {
       this.genderList();
       this.loadMovies();
  }
 //Atualiza a selectedOrder com o valor do evento e chama loadMoviesWhitSelectedOrder.
  getSelectedOrder(event: string) {
    this.selectedOrder = event;
    this.loadMoviesWhitSelectedOrder();
  }
// Atualiza selectedGenreId com o valor do evento e chama getMoviesWhithGender.
  getSelectedGener(event:any){
    console.log(event);
       this.selectedGenreId = Number(event);
       this.getMoviesWhithGender(Number(event)); 
  }

//Atualiza currentPage com o número da página.
  onPageChanged(page: number) {
    console.log(page);
       this.currentPage = page;
       this.loadMovies();
       this.loadMoviesWithGener();
       this.loadMoviesWhitSelectedOrder();
  }

//Chama o serviço para obter filmes com a página atual.
  loadMovies() {
    this._SERVICE.getMovies(this.currentPage).subscribe({
      next: (data: any) => {
        this.totalPages = data.total_pages;
        this.movies = data.results;
      }
    });
  }
// Chama o serviço para obter filmes com a página atual e o gênero selecionado.
  loadMoviesWithGener(){
    this._SERVICE.getMovies(this.currentPage, this.selectedGenreId, ).subscribe({
      next: (data: any) => {
        this.totalPages = data.total_pages;
        this.movies = data.results;
      }
    });
  }
// Chama o serviço para obter filmes com a ordem selecionada.
  loadMoviesWhitSelectedOrder() {
    this._SERVICE.getSort(this.selectedOrder).subscribe({
      next: (data: any) => {
        this.movies = data.results;
        console.log("TESTE");
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

  //Obtém filmes ordenados chamando o serviço.
  orderBy(event: string) {
    this._SERVICE.getSort(event).subscribe({
      next: (data: any) => {
        this.selectedOrder = event;
        this.loadMoviesWhitSelectedOrder();
        console.log("ORDER BY Filmes ordenados:", data);
      }
    })
  }
}
