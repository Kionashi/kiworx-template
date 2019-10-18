import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSectionInverseComponent } from './card-section-inverse.component';

describe('CardSectionInverseComponent', () => {
  let component: CardSectionInverseComponent;
  let fixture: ComponentFixture<CardSectionInverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSectionInverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSectionInverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
