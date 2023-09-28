import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponentComponent } from './landing-page.component';

describe('LandingPageComponentComponent', () => {
  let component: LandingPageComponentComponent;
  let fixture: ComponentFixture<LandingPageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageComponentComponent]
    });
    fixture = TestBed.createComponent(LandingPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});