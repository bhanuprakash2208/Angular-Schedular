import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'my-app';
 
}
/*import { Component } from '@angular/core';
import { View, DragEventArgs, ResizeEventArgs, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
//import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';


@Component({
  selector: 'app-root',
  
  template: `<ejs-schedule  width="1250" height="800" [currentView]="setView"  [selectedDate] = "setDate"  [eventSettings]= "eventSettings"  [allowResizing] = "true" [allowDragAndDrop] = "true" (dragStart) = "onDragStart($event)" (resizeStart) = "onResizeStart($event)">
  <e-views>
    <e-view option='Day' displayName='Day' startHour='07:00' endHour='22:00'></e-view>
    <e-view option='Week' isSelected='true' interval='1' startHour='07:00' endHour='22:00'></e-view>
    <e-view option='WorkWeek' interval='1' startHour='07:00' endHour='22:00'></e-view>
    <e-view option='Agenda' showWeekNumber='true'></e-view>
    <e-view option='MonthAgenda'></e-view>
    </e-views>  
  </ejs-schedule>`,
  
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'my-app';
  public setView: View ='Week';
  public setDate: Date = new Date(2020, 7, 15);
  public eventSettings: EventSettingsModel = {
    dataSource: [
      {
        Id: 0,
        Subject: 'Testing',
        StartTime: new Date(2020, 7, 10, 9, 30),
        EndTime: new Date(2020, 7, 11, 11, 0)
    },
    {
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2020, 7, 11, 9, 30),
        EndTime: new Date(2020, 7, 11, 11, 0),
        IsReadonly:true
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2020, 7, 12, 12, 0),
        EndTime: new Date(2020, 7, 12, 14, 0)
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2020, 7, 13, 9, 30),
        EndTime: new Date(2020, 7, 13, 11, 0)
    }, {
        Id: 4,
        Subject: 'Meteor Showers in 2018',
        StartTime: new Date(2020, 7, 14, 13, 0),
        EndTime: new Date(2020, 7, 14, 14, 30)
    },
    {
      Id: 5,
      Subject: 'Holiday Due to Independence',
      StartTime: new Date(2020, 7, 15, 0, 0),
      EndTime: new Date(2020, 7, 15, 23, 59),
      IsBlock: true
  },]
};

onDragStart(args: DragEventArgs): void {
  //args.scroll.enable = false;
  args.interval = 1;
  args.navigation.enable = true; 
}
onResizeStart(args: ResizeEventArgs): void {
 // args.scroll.enable = false;
 args.interval = 1;
}
//public setViews: View[] = ["Day","Week","WorkWeek","Agenda","MonthAgenda"];
}
*/ 
