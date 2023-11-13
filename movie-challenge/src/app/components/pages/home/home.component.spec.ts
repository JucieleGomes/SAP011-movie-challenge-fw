import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MoviesDataBaseService } from 'src/app/services/movies-data-base.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let _SERVICE: MoviesDataBaseService;
  _SERVICE = jasmine.createSpyObj('MoviesDataBaseService',{
        getMovies: (page:number)=>new Observable((resp)=>resp.next({
      total_pages: 21,
      results: []
    })),

    getMovie: (id:number)=>of({
      title: "movie Title",
      poster_path: "poster path"
    })
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {
          provide: MoviesDataBaseService,
          useValue: _SERVICE,
        }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
