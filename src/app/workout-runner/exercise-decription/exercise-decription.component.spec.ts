import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDecriptionComponent } from './exercise-decription.component';

describe('ExerciseDecriptionComponent', () => {
  let component: ExerciseDecriptionComponent;
  let fixture: ComponentFixture<ExerciseDecriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseDecriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDecriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
