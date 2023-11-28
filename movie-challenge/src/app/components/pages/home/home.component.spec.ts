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
              "pageNumber": "1"
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
});
