import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEleveComponent } from './student-eleve.component';

describe('StudentEleveComponent', () => {
  let component: StudentEleveComponent;
  let fixture: ComponentFixture<StudentEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentEleveComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
