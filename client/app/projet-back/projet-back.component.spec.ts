import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetBackComponent } from './projet-back.component';

describe('ProjetBackComponent', () => {
  let component: ProjetBackComponent;
  let fixture: ComponentFixture<ProjetBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
