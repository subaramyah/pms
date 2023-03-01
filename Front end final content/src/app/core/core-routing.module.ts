import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { EditPatientDetailsService } from '../services/edit-profile.service';
import { EditProfileComponent } from '../usermangment/edit-profile/edit-profile.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  {
    path: '',
    component: SideNavComponent,
    children: [
      {
        path: 'visit',
        loadChildren: () => import('../visit/visit.module').then(v => v.VisitModule)
      },
      {
        path: 'schedule',
        loadChildren: () => import('../schedule/schedule.module').then(s => s.ScheduleModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../admin/admin.module').then(a => a.AdminModule)
      },
      // {
      //   path: 'login',
      //   loadChildren: () => import('../login/login.module').then(l => l.LoginModule)
      // },
      // {
      //   path: 'inbox',
      //   loadChildren: () => import('../inbox/inbox.module').then(i =>i.InboxModule)
      // },
      {
        path: 'usermanagement',
        loadChildren: () => import('../usermangment/usermangment.module').then(u=>u.UsermangmentModule)
      },
      { path: 'changePassword', component: ChangePasswordComponent },

      {path: 'inbox',
      loadChildren: () => import('../inbox/inbox.module').then(i =>i.InboxModule) },
      // { path: 'edit-profile', component:EditProfileComponent },



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
