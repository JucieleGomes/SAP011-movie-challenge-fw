import { TestBed } from '@angular/core/testing';

import { MoviesDataBaseService } from './movies-data-base.service';

describe('MoviesDataBaseService', () => {
  let service: MoviesDataBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesDataBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
