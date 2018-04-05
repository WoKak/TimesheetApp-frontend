import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppMainpage} from './mainpage';
import {routing} from './app.routing';
import {AuthGuard} from './guard';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppLogout} from "./logout";
import {AppLogin} from "./login";
import {BackendService} from "./services";
import {AppAssignTask} from './assign-tasks';
import {AppEmployeesReports} from './employees-reports';
import {AppMyReports} from './my-reports';
import {AppAddTask} from './add-task';
import {AppAddWorker} from './add-worker';

@NgModule({
  imports: [BrowserModule, routing, FormsModule, HttpClientModule],
  declarations: [
    AppComponent, AppMainpage, AppLogin, AppLogout, AppAssignTask,
    AppEmployeesReports, AppMyReports, AppAddTask, AppAddWorker
  ],
  providers: [AuthGuard, BackendService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
