import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviesDataBaseService } from 'src/app/services/movies-data-base.service';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let moviesDataBaseService: MoviesDataBaseService;
  let httpTest: HttpTestingController;
  // let movie: any = {
  //   poster_path: 'path to image',
  //   title: 'movie title',
  //   vote_average: '5',
  //   release_date: '08-07-2022',
  //   genres: [
  //     {
  //       name:'crime',
  //     },
  //     {
  //       name: 'drama'
  //     }
  //   ],
  //   overview: 'movie overview'
  // };

  const mockMovie = {
    getMovie: (id: number) => {
      return of({
        title: "Titulo do Filme",
        poster_path: "Caminho da imagem"
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
              paramMap:{
                // get:()=>{return {"id":1}}
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
    component = fixture.componentInstance;
    moviesDataBaseService = TestBed.inject(MoviesDataBaseService); 
    // component.movie = movie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
