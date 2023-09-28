import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentComponent } from './environment.';

describe('EnvironmentComponent', () => {
  let component: EnvironmentComponent;
  let fixture: ComponentFixture<EnvironmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironmentComponent]
    });
    fixture = TestBed.createComponent(EnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
