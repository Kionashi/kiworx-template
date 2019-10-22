import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInModalComponentComponent } from './sign-in-modal-component.component';

describe('SignInModalComponentComponent', () => {
  let component: SignInModalComponentComponent;
  let fixture: ComponentFixture<SignInModalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInModalComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
