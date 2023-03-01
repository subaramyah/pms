import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApoointmentDetailsComponent} from './apoointment-details/apoointment-details.component'
const routes: Routes = [
  {
    path: "appointmentDetails", component: ApoointmentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
