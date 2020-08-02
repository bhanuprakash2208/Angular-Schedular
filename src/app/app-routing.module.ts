import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { LogoutComponent } from './logout/logout.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch: 'full' },
  {path:'login', component: LoginComponent },
  {path: 'schedule', component: ScheduleComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

