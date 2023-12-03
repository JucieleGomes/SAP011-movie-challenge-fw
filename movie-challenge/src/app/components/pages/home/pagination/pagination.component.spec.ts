import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit pageChanged event when loadPage is called', () => {
    spyOn(component.pageChanged, 'emit');
    const pageNumber = 2;
    component.loadPage(pageNumber);
    expect(component.pageChanged.emit).toHaveBeenCalledWith(pageNumber);
  });

  it('should emit pageChanged event when loadPreviousPage is called', () => {
    spyOn(component.pageChanged, 'emit');
    component.currentPage = 3;
    component.loadPreviousPage();
    expect(component.pageChanged.emit).toHaveBeenCalledWith(2);
  });

  it('should not emit pageChanged event when loadPreviousPage is called on the first page', () => {
    spyOn(component.pageChanged, 'emit');
    component.currentPage = 1;
    component.loadPreviousPage();
    expect(component.pageChanged.emit).not.toHaveBeenCalled();
  });

  it('should emit pageChanged event when loadNextPage is called', () => {
    spyOn(component.pageChanged, 'emit');
    component.currentPage = 3;
    component.totalPages = 5;
    component.loadNextPage();
    expect(component.pageChanged.emit).toHaveBeenCalledWith(4);
  });

  it('should not emit pageChanged event when loadNextPage is called on the last page', () => {
    spyOn(component.pageChanged, 'emit');
    component.currentPage = 5;
    component.totalPages = 5;
    component.loadNextPage();
    expect(component.pageChanged.emit).not.toHaveBeenCalled();
  });

  it('should emit pageChanged event when goToPage is called', () => {
    spyOn(component.pageChanged, 'emit');
    const pageNumber = 2;
    component.goToPage(pageNumber);
    expect(component.pageChanged.emit).toHaveBeenCalledWith(pageNumber);
  });

  it('should return true for isSelectedPage if pageNumber is the current page', () => {
    const pageNumber = 3;
    component.currentPage = pageNumber;
    const isSelected = component.isSelectedPage(pageNumber);
    expect(isSelected).toBe(true);
  });

  it('should return false for isSelectedPage if pageNumber is not the current page', () => {
    const pageNumber = 3;
    component.currentPage = 2;
    const isSelected = component.isSelectedPage(pageNumber);
    expect(isSelected).toBe(false);
  });
});
