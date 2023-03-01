import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UsermangmentRoutingModule } from './usermangment-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedMaterialModule } from '../shared/shared-material/shared-material.module';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HospitalUserEditProfileComponent } from './hospital-user-edit-profile/hospital-user-edit-profile.component'
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
// import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { CalenderComponent } from './calender/calender.component';
import { MonthService, ScheduleModule, WeekService } from '@syncfusion/ej2-angular-schedule';


@NgModule({
  declarations: [ProfileComponent,EditProfileComponent,PatientDetailsComponent, 
    HospitalUserEditProfileComponent, CalenderComponent],
  imports: [
    CommonModule,
    UsermangmentRoutingModule,
    SharedMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ScheduleModule 
  ],
  exports: [
    SharedMaterialModule
    
  ],
  providers: [WeekService, MonthService],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UsermangmentModule { }
