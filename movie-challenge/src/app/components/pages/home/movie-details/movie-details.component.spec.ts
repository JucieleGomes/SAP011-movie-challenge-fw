import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviesDataBaseService } from 'src/app/services/movies-data-base.service';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let moviesDataBaseService: MoviesDataBaseService;
  let route: ActivatedRoute;
  let _SPINNER: NgxSpinnerService;


  const mockMovie = {
    getMovie: (id: number) => {
      return of({
         poster_path: 'path to image',
    title: 'movie title',
    vote_average: 5,
    release_date: '08-07-2022',
    genres: [
      {
        name:'crime',
      },
      {
        name: 'drama'
      }
    ],
    overview: 'movie overview',

    vote_count: 25

      });
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent],
      imports: [RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: MoviesDataBaseService,
          useValue: mockMovie
        },
        {
          provide:ActivatedRoute, 
          useValue: {
            snapshot: {
              queryParamMap:{
                get: ()=>of({
                  "id":1,
                  "genres":["terror", "animação"],
                  "order": "asc",
                  "pageNumber": 1
                })
              },
              paramMap:{
               get: ()=>of({
                "id":1
               })
              }
            }
          }
        }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(MovieDetailsComponent);
    moviesDataBaseService = TestBed.inject(MoviesDataBaseService); 
    route = TestBed.inject(ActivatedRoute);
    _SPINNER = TestBed.inject(NgxSpinnerService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
