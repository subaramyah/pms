import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { Router } from '@angular/router';
 
import {ProfileComponent} from'../../usermangment/profile/profile.component';
import { SideNavService } from 'src/app/services/side-nav.service';
import { ProfileService } from 'src/app/services/profile.service';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  email:any;
  authUserObj: any;
  role:any;
  public profileData: Array<any> = [];
  patient:any
//  greet: any;
 
  constructor( private sideNavService: SideNavService,
     private dialog: MatDialog,private router:Router,private profileSVC:ProfileService
    ) {
  }
 
  ngOnInit(): void {
    this.role = sessionStorage.getItem('loggedInRole');
    this.email = sessionStorage.getItem('loggedInEmail');    
 
    if(this.role=='ROLE_PATIENT')
      this.profileSVC.get_patient_profile(this.email).subscribe(data => this.profileData.push(data)); 
    else
      this.profileSVC.get_hospital_user_profile(this.email).subscribe(data => this.profileData.push(data)); 
      
      //  let myDate = new Date();
      //  let hrs = myDate.getHours();
      //  console.log("999999999999"+hrs);
      // if (hrs < 12)
      //     this.greet = 'Good Morning ';
      // else if (hrs >= 12 && hrs < 16)
      //     this.greet = 'Good Afternoon ';
      // else if (hrs >= 16 && hrs <= 24)
      //     this.greet = 'Good Evening';
  }

 
  clickMenu(): void{
    this.sideNavService.toggle();
  }
 
  ngOnDestroy(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '640px'
      
    });
    dialogRef.afterClosed().subscribe(result => {
      if(this.role=='ROLE_PATIENT')
        this.router.navigate(["/core/usermanagement/edit_profile"]);
      else
        this.router.navigate(["core/usermanagement/hospital_user_edit_profile"]);
    });
  }
 
}