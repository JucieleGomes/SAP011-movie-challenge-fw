import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataBaseService {
  private readonly _KEY = '8820cbd95de8c7b969ad900a8ac7801f';
  private readonly _URL = `https://api.themoviedb.org/3/discover/movie?api_key=${this._KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&language=pt&page=`;


  constructor(private readonly _HTTP: HttpClient) {}

  getMovies(page:number): Observable<any> {
    return this._HTTP.get(`${this._URL}${page}`);
  }

  getMovie(id: number): Observable<any> {
    return this._HTTP.get(`https://api.themoviedb.org/3/discover/movie/${id}?api_key=${this._KEY}`);
  }

  
  


}
