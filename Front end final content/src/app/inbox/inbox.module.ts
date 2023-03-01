import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { SharedInboxComponent } from './shared-inbox/shared-inbox.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DialogReplyDialog, MessagesComponent } from './messages/messages.component';
import { ApprovedAppointmentsComponent } from './approved-appointments/approved-appointments.component';
import { SharedMaterialModule } from '../shared/shared-material/shared-material.module';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [ SharedInboxComponent, AppointmentsComponent, MessagesComponent, ApprovedAppointmentsComponent,DialogReplyDialog],
  entryComponents: [
    DialogReplyDialog
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedMaterialModule,
    FlexLayoutModule
    
  ],
  exports : [
    SharedMaterialModule,
    MatSnackBarModule,
    MatSelectModule
  ]
})
export class InboxModule { }
