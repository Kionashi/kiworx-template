import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupsCardComponent } from './startups-card.component';

describe('StartupsCardComponent', () => {
  let component: StartupsCardComponent;
  let fixture: ComponentFixture<StartupsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
