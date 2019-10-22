import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupsSliderComponent } from './startups-slider.component';

describe('StartupsSliderComponent', () => {
  let component: StartupsSliderComponent;
  let fixture: ComponentFixture<StartupsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
