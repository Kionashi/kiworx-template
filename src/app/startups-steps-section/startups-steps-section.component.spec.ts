import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupsStepsSectionComponent } from './startups-steps-section.component';

describe('StartupsStepsSectionComponent', () => {
  let component: StartupsStepsSectionComponent;
  let fixture: ComponentFixture<StartupsStepsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupsStepsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupsStepsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
