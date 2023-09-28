import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoasterListComponent } from './coaster-list.component';

describe('CoasterListComponent', () => {
  let component: CoasterListComponent;
  let fixture: ComponentFixture<CoasterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoasterListComponent]
    });
    fixture = TestBed.createComponent(CoasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
