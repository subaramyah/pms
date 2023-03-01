import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators,ReactiveFormsModule,FormArray } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-hospital-user-edit-profile',
  templateUrl: './hospital-user-edit-profile.component.html',
  styleUrls: ['./hospital-user-edit-profile.component.css']
})
export class HospitalUserEditProfileComponent implements OnInit {
  //matcher = new MyErrorStateMatcher();
  editForm!: FormGroup;
  showMsg: boolean = false;
  role:any|null;
  authUserObj: any;
  userId:any;
  public hospitalUserData: Array<any> = [];
  public maxDate = new Date();
  
  constructor(private formBuilder: FormBuilder,private profileSVC: ProfileService,
    private _snackBar: MatSnackBar) { 
    this.editForm = this.formBuilder.group({
      title: [''],
      firstName: [''],
      lastName: [''],
      emailId: [''],
      contactNumber: [''],
      dob: [''],
      gender:[''],
      address: [''],
      specialization:[''],
      experience: ['']
    
      });

  }
  
  submitForm(){
      let authUser = sessionStorage.getItem('auth-user');

      if(authUser!==null)
      this.authUserObj = JSON.parse(authUser);
  
      this.role = this.authUserObj.role;
      this.userId=this.authUserObj.userId
      this.profileSVC.edit_hospital_user(this.editForm.value,this.userId).subscribe((result) => { console.warn(result); });
      this.editForm.reset();
      this.openSnackBar()
  }

  openSnackBar() {
    this._snackBar.open('Data Saved Successfully!!', 'End', {
      duration: 500,
    
    });
  }

  ngOnInit(): void {
    let authUser = sessionStorage.getItem('auth-user');
    if(authUser!==null)
     this.authUserObj = JSON.parse(authUser);
  
     this.role = this.authUserObj.role;
     this.userId=this.authUserObj.userId
     // this.profileSVC.getprofiles().subscribe(data => this.patientData.push(data));
     this.profileSVC.get_hospital_user_profile(this.userId).subscribe(data => this.hospitalUserData.push(data));

      console.log(this.hospitalUserData)
  }

}
