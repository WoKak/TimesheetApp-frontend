import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmployeeTimesheetsComponent} from './employee-timesheets.component';

describe('EmployeeTimesheetsComponent', () => {
  let component: EmployeeTimesheetsComponent;
  let fixture: ComponentFixture<EmployeeTimesheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeTimesheetsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTimesheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
