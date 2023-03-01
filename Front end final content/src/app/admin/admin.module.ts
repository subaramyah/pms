import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table' 
import { SharedMaterialModule } from '../shared/shared-material/shared-material.module';
import {UserRegistrationComponent} from '../admin/user-registration/user-registration.component'
import {CommonUsersListComponent} from '../admin/common-users-list/common-users-list.component';
import { HospitalUserListComponent } from './hospital-user-list/hospital-user-list.component'

@NgModule({
  declarations: [UserRegistrationComponent,CommonUsersListComponent, HospitalUserListComponent ],
  
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedMaterialModule,
    MatTableModule
  ],
  exports: [
    SharedMaterialModule,
    MatTableModule
  ]
})
export class AdminModule { 
  
}
