import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosGridComponent } from './logos-grid.component';

describe('LogosGridComponent', () => {
  let component: LogosGridComponent;
  let fixture: ComponentFixture<LogosGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogosGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
