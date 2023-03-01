import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

//import { ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PatientDetailsComponent } from '../patient-details/patient-details.component';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
//import { ChangePasswordComponent } from 'src/app/Modules/login/change-password/change-password.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
//public profiles: PatientProfile[];
  public profileData: Array<any> = [];
  role:any|null;
  authUserObj: any;
  email:any; 
  authUser:any;
  parsedAuthUserObj:any;

  constructor(public svc: AuthService, private router: Router, private route: ActivatedRoute,
    private profileSVC:ProfileService,private dialog: MatDialog) { }


  ngOnInit(): void {
  
    this.role = sessionStorage.getItem('loggedInRole');
    this.email = sessionStorage.getItem('loggedInEmail');   
     if(this.role=='ROLE_PATIENT'){
        console.log("$$$$$$$$$$"+ this.role);
        this.profileSVC.get_patient_profile(this.email).subscribe((data) => {
          this.profileData.push(data);
        console.log("$$$$$$$$$$"+ this.profileData);

        })
      }
      else
        this.profileSVC.get_hospital_user_profile(this.email).subscribe(data => this.profileData.push(data)); 

}

openPatientDetailsForm(){
    this.dialog.closeAll();
}

openEditForm(){
  this.dialog.closeAll();
 this.router.navigate(["/core/usermanagement/edit_profile"]);
//  this.router.navigate(["/core/usermanagement/patientDetails"]);
 }

}