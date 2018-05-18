import {Routes, RouterModule} from "@angular/router";
import {MainPageComponent} from './main-page/main-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {LogoutPageComponent} from './logout-page/logout-page.component';
import {EmployeeTimesheetsComponent} from './employee-timesheets/employee-timesheets.component';
import {EmployeesTimesheetsComponent} from './employees-timesheets/employees-timesheets.component';
import {EditTasksComponent} from './edit-tasks/edit-tasks.component';
import {NewTaskFormComponent} from './new-task-form/new-task-form.component';
import {AuthGuard} from './auth.guard';

const appRoutes: Routes = [
  {path: 'main', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'logout', component: LogoutPageComponent},
  {path: 'my-reports', component: EmployeeTimesheetsComponent, canActivate: [AuthGuard]},
  {path: 'employees-reports', component: EmployeesTimesheetsComponent, canActivate: [AuthGuard]},
  {path: 'assign-tasks', component: EditTasksComponent, canActivate: [AuthGuard]},
  {path: 'add-task', component: NewTaskFormComponent, canActivate: [AuthGuard]},

  {path: '**', redirectTo: 'login'}
];

export const routing = RouterModule.forRoot(appRoutes);
