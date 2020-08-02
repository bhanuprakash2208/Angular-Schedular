import { Component, OnInit } from '@angular/core';
import { View, DragEventArgs, ResizeEventArgs, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public display = true;

  constructor(private router:Router){}
  
  onLogout(){
    this.display = false;
    this.router.navigate(["/logout"])
  }

  ngOnInit(): void {
  }
 
  public setView: View ='Week';
  public setDate: Date = new Date(2020, 7, 15);
  public eventSettings: EventSettingsModel = {
    dataSource: [
      {
        Id: 0,
        Subject: 'Project Demo',
        StartTime: new Date(2020, 7, 10, 9, 30),
        EndTime: new Date(2020, 7, 11, 11, 0)
    },
    {
        Id: 1,
        Subject: 'Client Meeting',
        StartTime: new Date(2020, 7, 11, 9, 30),
        EndTime: new Date(2020, 7, 11, 11, 0),
        IsReadonly:true
    }, {
        Id: 2,
        Subject: 'Hr Meeting',
        StartTime: new Date(2020, 7, 12, 12, 0),
        EndTime: new Date(2020, 7, 12, 14, 0)
    }, {
        Id: 3,
        Subject: 'Board Meeting',
        StartTime: new Date(2020, 7, 13, 9, 30),
        EndTime: new Date(2020, 7, 13, 11, 0)
    }, {
        Id: 4,
        Subject: 'Support Meeting with Managers',
        StartTime: new Date(2020, 7, 14, 13, 0),
        EndTime: new Date(2020, 7, 14, 14, 30),
        
    },
    {
      Id: 5,
      Subject: 'ting ForumMarke',
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
public updateValue=false;
  
  public Update(){
    this.updateValue=true;
  }

}
