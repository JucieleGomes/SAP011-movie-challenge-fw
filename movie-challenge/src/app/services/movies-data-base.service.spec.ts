import { TestBed } from '@angular/core/testing';

import { MoviesDataBaseService } from './movies-data-base.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MoviesDataBaseService', () => {
  let service: MoviesDataBaseService;
  let httpTest: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MoviesDataBaseService,
      ]
    });
    //simula um constructor
    service = TestBed.inject(MoviesDataBaseService);
    httpTest = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
