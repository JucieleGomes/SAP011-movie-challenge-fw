import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TopContentComponent } from './top-content.component';
import { ElementRef } from '@angular/core';

describe('TopContentComponent', () => {
  let component: TopContentComponent;
  let fixture: ComponentFixture<TopContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TopContentComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selected genre', () => {
    spyOn(component.getSelectedGenerEmitter, 'emit');
    const event = { target: { value: 'action' } };
    component.getSelectedGener(event);
    expect(component.getSelectedGenerEmitter.emit).toHaveBeenCalledWith('action');
  });

  it('should emit selected order', () => {
    spyOn(component.getSelectedOrderEmitter, 'emit');
    const event = { target: { value: 'popularity.desc' } };
    component.getSelectedOrder(event);
    expect(component.getSelectedOrderEmitter.emit).toHaveBeenCalledWith('popularity.desc');
  });

  it('should emit search value', () => {
    spyOn(component.getSearchEmitter, 'emit');
    const event = { target: { value: 'search term' } };
    component.getSearch(event);
    expect(component.getSearchEmitter.emit).toHaveBeenCalledWith('search term');
  });

  it('should emit search button click', () => {
    spyOn(component.searchButtonClick, 'emit');
    component.onSearchButtonClick();
    expect(component.searchButtonClick.emit).toHaveBeenCalled();
  });

  it('should emit clear events', () => {
    spyOn(component.getSelectedGenerEmitter, 'emit');
    spyOn(component.getSelectedOrderEmitter, 'emit');
    spyOn(component.getSearchEmitter, 'emit');
    component.clear();
    expect(component.getSelectedGenerEmitter.emit).toHaveBeenCalledWith('');
    expect(component.getSelectedOrderEmitter.emit).toHaveBeenCalledWith('');
    expect(component.getSearchEmitter.emit).toHaveBeenCalledWith('');
  });
});
