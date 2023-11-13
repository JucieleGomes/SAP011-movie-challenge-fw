import { TestBed } from '@angular/core/testing';

import { MoviesDataBaseService } from './movies-data-base.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MoviesDataBaseService', () => {
  let service: MoviesDataBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(MoviesDataBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
