import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmployeesTimesheetsComponent} from './employees-timesheets.component';

describe('EmployeesTimesheetsComponent', () => {
  let component: EmployeesTimesheetsComponent;
  let fixture: ComponentFixture<EmployeesTimesheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesTimesheetsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesTimesheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
