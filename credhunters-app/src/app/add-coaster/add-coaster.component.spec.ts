import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoasterComponent } from './add-coaster.component';

describe('AddCoasterComponent', () => {
  let component: AddCoasterComponent;
  let fixture: ComponentFixture<AddCoasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCoasterComponent]
    });
    fixture = TestBed.createComponent(AddCoasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
