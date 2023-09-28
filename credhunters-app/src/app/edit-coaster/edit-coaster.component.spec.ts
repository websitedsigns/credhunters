import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoasterComponent } from './edit-coaster.component';

describe('EditCoasterComponent', () => {
  let component: EditCoasterComponent;
  let fixture: ComponentFixture<EditCoasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCoasterComponent]
    });
    fixture = TestBed.createComponent(EditCoasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
