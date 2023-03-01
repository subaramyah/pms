import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { SharedMaterialModule } from '../shared/shared-material/shared-material.module';
import {ApoointmentDetailsComponent} from '../schedule/apoointment-details/apoointment-details.component'
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [ApoointmentDetailsComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    SharedMaterialModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports : [
    SharedMaterialModule
  ]
})
export class ScheduleModule { }
