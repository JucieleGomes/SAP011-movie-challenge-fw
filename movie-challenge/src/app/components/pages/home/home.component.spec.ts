import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MoviesDataBaseService } from 'src/app/services/movies-data-base.service';
import { Observable, of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let _SERVICE: MoviesDataBaseService;
  
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    _SERVICE = new MoviesDataBaseService(httpClientSpy);
//     _SERVICE = jasmine.createSpyObj('MoviesDataBaseService',{
//       getMovies: (page:number)=>new Observable((resp)=>resp.next({
//     total_pages: 21,
//     results: []
//   })),

//   getMovie: (id:number)=>of({
//     title: "movie Title",
//     poster_path: "poster path"
//   }),
//   getGenderList:()=>new Observable<any>((resp)=>resp.next({
//     genres: [
//       {id: 1, name: "genero1"},
//       {id:2, name: "genero2"},
//     ]
//    }))
// })
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule],
      providers: [
        MoviesDataBaseService,
        // {
        //   provide: MoviesDataBaseService,
        //   useValue: _SERVICE,
        // }

      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    // moviesDataBaseService = TestBed.inject(MoviesDataBaseService);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    _SERVICE = TestBed.inject(MoviesDataBaseService);
    // fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
