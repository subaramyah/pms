import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitFormComponent } from './visit-form/visit-form.component';
import {AppointmentFormComponent  } from './appointment-form/appointment-form.component';
// import { VisitHistoryComponent } from './visit-history/visit-history.component';
 import { VitalSignsComponent } from './vital-signs/vital-signs.component';

const routes: Routes = [
  // { path : 'visit_details', component : VisitHistoryComponent},
   { path: 'visit_form', component: VisitFormComponent },
  { path: 'appointmentForm', component: AppointmentFormComponent },
   { path: 'vital_form', component: VitalSignsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitRoutingModule { }
