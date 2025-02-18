import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieContainerComponent } from './movie-container.component';

describe('MovieContainerComponent', () => {
  let component: MovieContainerComponent;
  let fixture: ComponentFixture<MovieContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieContainerComponent]
    });
    fixture = TestBed.createComponent(MovieContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set queryParams correctly when order, genres, and pageNumber are provided', () => {
    component.order = 'popularity.desc';
    component.genres = '28';
    component.pageNumber = '1';

    component.ngOnChanges({} as any);

    expect(component.queryParams).toEqual({
      order: 'popularity.desc',
      genres: '28',
      pageNumber: '1'
    });
  });

  it('should set queryParams to an empty object when no order, genres, or pageNumber is provided', () => {
    component.ngOnChanges({} as any);

    expect(component.queryParams).toEqual({});
  });
});

