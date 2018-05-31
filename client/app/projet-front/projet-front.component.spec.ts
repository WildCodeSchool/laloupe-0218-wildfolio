import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetFrontComponent } from './projet-front.component';

describe('ProjetFrontComponent', () => {
  let component: ProjetFrontComponent;
  let fixture: ComponentFixture<ProjetFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
