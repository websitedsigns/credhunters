import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoasterCounterComponent } from './coaster-counter.component';

describe('CoasterCounterComponent', () => {
  let component: CoasterCounterComponent;
  let fixture: ComponentFixture<CoasterCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoasterCounterComponent]
    });
    fixture = TestBed.createComponent(CoasterCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
