import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {AuthGuard} from './auth.guard';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NewTaskFormComponent} from './new-task-form/new-task-form.component';
import {EditTasksComponent} from './edit-tasks/edit-tasks.component';
import {EmployeesTimesheetsComponent} from './employees-timesheets/employees-timesheets.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {LogoutPageComponent} from './logout-page/logout-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {EmployeeTimesheetsComponent} from './employee-timesheets/employee-timesheets.component';
import {BackendService} from './backend.service';
import {DateService} from './date.service';
import {AuthService} from './auth.service';

@NgModule({
  imports: [BrowserModule, routing, FormsModule, HttpClientModule],
  declarations: [
    AppComponent, NewTaskFormComponent, EditTasksComponent,
    EmployeesTimesheetsComponent, LoginPageComponent, LogoutPageComponent,
    MainPageComponent, EmployeeTimesheetsComponent
  ],
  providers: [AuthGuard, BackendService, HttpClient, DateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
