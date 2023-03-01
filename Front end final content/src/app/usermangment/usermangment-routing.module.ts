import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {PatientDetailsComponent} from '../usermangment/patient-details/patient-details.component';
import { HospitalUserEditProfileComponent } from './hospital-user-edit-profile/hospital-user-edit-profile.component';
import { CalenderComponent } from './calender/calender.component';
import { MonthService, WeekService } from '@syncfusion/ej2-angular-schedule';

const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent,
    
  },
  {
    path: 'edit_profile',
    component: EditProfileComponent
  },
  {
    //path: 'patient_details',
    path: 'patientDetails',
    component: PatientDetailsComponent
  },
  {
    path: 'hospital_user_edit_profile',
    component: HospitalUserEditProfileComponent
  },
  {
    path: 'calender',
    component: CalenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermangmentRoutingModule { }
