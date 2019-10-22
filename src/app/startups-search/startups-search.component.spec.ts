import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupsSearchComponent } from './startups-search.component';

describe('StartupsSearchComponent', () => {
  let component: StartupsSearchComponent;
  let fixture: ComponentFixture<StartupsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
