import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataBaseService {
  private readonly _KEY = '8820cbd95de8c7b969ad900a8ac7801f';
  private readonly _URL = `https://api.themoviedb.org/3/discover/movie?api_key=${this._KEY}&include_adult=false&include_video=false&language=en-US&page=1&language=pt&page=`;

  constructor(private readonly _HTTP: HttpClient) {}

  getMovies(page: number, gener?: any, order?: any): Observable<any> {
    //Quando o genero for selecionado
    if (gener !== undefined && gener !== null) {
      return this._HTTP.get(`${this._URL}${page}&with_genres=${gener}`);
    } 
    //Quando a ordenação for selecionada 
    if (order !== undefined && order !== "") {
      return this._HTTP.get(`${this._URL}${page}&sort_by=${order}`);
    }
    //Quando o genero e ordenação forem selecionados
    if ((order !== undefined && order !== "")&&(gener !== undefined && gener !== null)) {
      return this._HTTP.get(`${this._URL}${page}&with_genres=${gener}&sort_by=${order}`);
    }
    //Quando nenhum filtro for selecionado
    else {
      return this._HTTP.get(`${this._URL}${page}`);
    }
  }
  
  getMovie(id: number): Observable<any> {
    return this._HTTP.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this._KEY}&language=pt`);
  }

  getGenderList(): Observable<any> {
    return this._HTTP.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this._KEY}&language=pt`);
  }

  getMoviesByGender(genreId: number): Observable<any> {
    return this._HTTP.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=${genreId}&api_key=${this._KEY}`);
  }
}
