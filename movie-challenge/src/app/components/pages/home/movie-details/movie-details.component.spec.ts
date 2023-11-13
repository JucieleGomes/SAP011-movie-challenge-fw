import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviesDataBaseService } from 'src/app/services/movies-data-base.service';
import { of } from 'rxjs';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let moviesDataBaseService: MoviesDataBaseService;

  const mockMovie = {
    getMovie: (id: number) => {
      return of({
        title: "Titulo do Filme",
        poster_path: "Caminh da imagem"
      });
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: MoviesDataBaseService,
          useValue: mockMovie
        }
      ]
    });

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    moviesDataBaseService = TestBed.inject(MoviesDataBaseService); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
