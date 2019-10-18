import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientStepsSectionComponent } from './client-steps-section.component';

describe('ClientStepsSectionComponent', () => {
  let component: ClientStepsSectionComponent;
  let fixture: ComponentFixture<ClientStepsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientStepsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientStepsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
