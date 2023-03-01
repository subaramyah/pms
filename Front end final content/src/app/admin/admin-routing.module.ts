import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {UserRegistrationComponent} from '../admin/user-registration/user-registration.component'
import {CommonUsersListComponent} from '../admin/common-users-list/common-users-list.component'
import { HospitalUserListComponent } from './hospital-user-list/hospital-user-list.component';
const routes: Routes = [
  {
    path: "userRegistration",
    component: UserRegistrationComponent
   },
   {
    path: "userList",
    component: CommonUsersListComponent
   },
   {
    path: "hospitalUserList",
    component: HospitalUserListComponent
   }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
