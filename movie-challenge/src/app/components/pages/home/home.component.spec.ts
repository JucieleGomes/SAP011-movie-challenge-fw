import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MoviesDataBaseService } from 'src/app/services/movies-data-base.service';
import { Observable, of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, ActivationEnd } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let _SERVICE: MoviesDataBaseService;
  let route: ActivatedRoute;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    _SERVICE = new MoviesDataBaseService(httpClientSpy);


    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
      provide:ActivatedRoute,
      useValue: {
        snapshot:{
          queryParamMap: {
            get: ()=> of({
              "genre":"genre1",
              "order": "order1",
              "pageNumber": 1,
            })}}
      }
        },

        MoviesDataBaseService,

      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(HomeComponent);
    route = TestBed.inject(ActivatedRoute);
    _SERVICE = TestBed.inject(MoviesDataBaseService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadMovies on initialization', () => {
    spyOn(component, 'loadMovies');
  });
  
  it('should update currentPage when onPageChanged is called', () => {
    const page = 2;
    component.onPageChanged(page);
    expect(component.currentPage).toEqual(page);
  });

  it('should call loadMovies when onPageChanged is called', () => {
    spyOn(component, 'loadMovies');
    const page = 2;
    component.onPageChanged(page);
    expect(component.loadMovies).toHaveBeenCalled();
  });

  it('should call getMovies with correct parameters when loadMovies is called', () => {
    spyOn(_SERVICE, 'getMovies').and.returnValue(of({ total_pages: 2, results: [] }));
    const page = 2;
    const genre = 'genre1';
    const order = 'order1';
    component.currentPage = page;
    component.selectedGenreId = genre;
    component.selectedOrder = order;
  
    component.loadMovies();
  
    expect(_SERVICE.getMovies).toHaveBeenCalledWith(page, genre, order);
  });
  
  it('should update totalPages and movies when loadMovies is called', () => {
    const responseData = { total_pages: 2, results: [{ title: 'Movie 1' }, { title: 'Movie 2' }] };
    spyOn(_SERVICE, 'getMovies').and.returnValue(of(responseData));
  
    component.loadMovies();
  
    expect(component.totalPages).toEqual(responseData.total_pages);
    expect(component.movies).toEqual(responseData.results);
  });

  describe('Search Functionality', () => {
    it('should filter movies based on search term', () => {
 
      const searchValue = 'Avengers';
      const mockMovies = [
        { title: 'Avengers: Endgame', },
        { title: 'Spider-Man: Far From Home',  },
      ];

      spyOn(_SERVICE, 'getMovies').and.returnValue(of({ results: mockMovies }));

      component.searchMovie = searchValue;
      component.searchMoviesList();

      expect(_SERVICE.getMovies).toHaveBeenCalledWith(component.currentPage);
      expect(component.allMovies).toEqual(mockMovies);

      expect(component.movies.length).toBeGreaterThan(0);
      expect(component.movies.every(movie => movie.title.toLowerCase().includes(searchValue.toLowerCase()))).toBe(true);
    });
  });

});
