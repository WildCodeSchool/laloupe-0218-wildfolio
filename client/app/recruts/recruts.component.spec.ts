import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutsComponent } from './recruts.component';

describe('RecrutsComponent', () => {
  let component: RecrutsComponent;
  let fixture: ComponentFixture<RecrutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecrutsComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecrutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
