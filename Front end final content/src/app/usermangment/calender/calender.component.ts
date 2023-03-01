import { Component, OnInit } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { defaultData } from './datasource';


@Component({
  selector: 'app-calender',
  //providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService]
  providers: [WeekService, MonthService, WorkWeekService],
  // templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
  // template: `<ejs-schedule> </ejs-schedule>`
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings"><e-views> <e-view option="Week" startHour="07:00" endHour="15:00"></e-view>
  <e-view option="WorkWeek" startHour="10:00" endHour="18:00"></e-view> 
  <e-view option="Month" [showWeekend]="showWeekend"></e-view></e-views></ejs-schedule>`
})

export class CalenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
  }
  minValidation: (args: { [key: string]: string }) => boolean = (args: { [key: string]: string }) => {
    return args['value'].length >= 5;};
 

  public selectedDate: Date = new Date(2018, 1, 15);
  public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'];
  public eventSettings: EventSettingsModel = {
    dataSource: defaultData,
    fields: {
        id: 'Id',
        subject: { name: 'Subject', validation: { required: true } },
        // location: { name: 'Location', validation: { required: true } },
        description: {
            name: 'Description', validation: {
                required: true, minLength: [this.minValidation, 'Need atleast 5 letters to be entered']
            }
        },
        startTime: { name: 'StartTime', validation: { required: true } },
        endTime: { name: 'EndTime', validation: { required: true } }
    }
  }
    

  // public selectedDate: Date = new Date(2018, 1, 15);
   public showWeekend: boolean = false;
  // public eventSettings: EventSettingsModel = { dataSource: defaultData };

}