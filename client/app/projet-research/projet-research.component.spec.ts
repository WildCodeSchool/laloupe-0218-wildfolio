import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetResearchComponent } from './projet-research.component';

describe('ProjetResearchComponent', () => {
  let component: ProjetResearchComponent;
  let fixture: ComponentFixture<ProjetResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetResearchComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
