import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMailComponent } from './sendmail.component';

describe('SendMailComponent', () => {
  let component: SendMailComponent;
  let fixture: ComponentFixture<SendMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SendMailComponent],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
