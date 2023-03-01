import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppointmentsComponent } from './appointments/appointments.component';
// import { ApprovedAppointmentsComponent } from './approved-appointments/approved-appointments.component';
// import { MessagesComponent } from './messages/messages.component';
import { SharedInboxComponent } from './shared-inbox/shared-inbox.component';


const routes: Routes = [
    {path : 'sharedinbox', component: SharedInboxComponent},
    {path : '/core/inbox/sharedinbox', component: SharedInboxComponent}
     
  //     { path: 'appoinment', component: AppointmentsComponent, pathMatch:'full'},
  //     { path: 'message', component: MessagesComponent, pathMatch:'full'},
  //     { path: 'approvedAppoinment', component: ApprovedAppointmentsComponent, pathMatch:'full'}
   
  //}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
