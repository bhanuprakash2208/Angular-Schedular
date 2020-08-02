import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleModule, RecurrenceEditorModule ,DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService, DragAndDropService,ResizeService } from '@syncfusion/ej2-angular-schedule';
import { ScheduleComponent } from './schedule/schedule.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ScheduleModule, RecurrenceEditorModule
  ],
  
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService, DragAndDropService,ResizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
// import the ScheduleModule for the Schedule component
//import { ScheduleModule ,DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
//import { AppComponent }  from './app.component';

//@NgModule({
  //declaration of ej2-angular-schedule module into NgModule
  //imports:      [ BrowserModule, ScheduleModule ],
 // providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  //declarations: [ AppComponent ],
  //bootstrap:    [ AppComponent ]
//})
//export class AppModule { }
