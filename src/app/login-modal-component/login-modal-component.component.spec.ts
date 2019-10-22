import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModalComponentComponent } from './login-modal-component.component';

describe('LoginModalComponentComponent', () => {
  let component: LoginModalComponentComponent;
  let fixture: ComponentFixture<LoginModalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginModalComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
