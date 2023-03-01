import { Component, OnInit } from '@angular/core';
import {MustMatch} from '../user-registration/user-registration-validator';

import {  FormGroup, Validators,FormBuilder, FormGroupDirective} from '@angular/forms';
import {ViewChild} from '@angular/core'
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { HttpClient } from '@angular/common/http';
import { MyErrorStateMatcher } from 'src/app/app.component';
import { employeeRegistration } from './employeeRegistration';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  public maxDate = new Date()
  alert:boolean=false;
  passhide = true;
  confpasshide=true;
  public error: string = "";
  userRegisterForm!: FormGroup;
   matcher = new MyErrorStateMatcher();
  @ViewChild(FormGroupDirective) formDirective: any;
 
 constructor(private formBuilder: FormBuilder,
  private _snackBar: MatSnackBar,
  private http: HttpClient) {}

  ngOnInit(): void {
    this.userRegisterForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', [ Validators.required, Validators.minLength(3)]],
      lastName: ['', [ Validators.required, Validators.minLength(1)]],
      contactNumber: ['', [Validators.required, Validators.pattern('[789][0-9]{9}')]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      role: ['', Validators.required],
      specialization: ['', Validators.required],
      // password:"passsword@123"
     
  });
  }

  // userRegister():void{
  //   console.log("1111111111"+this.userRegisterForm.value)
  //   this.http.post("http://localhost:9900/api/auth/register",this.userRegisterForm.value)
  //   .subscribe((result)=>{  
  //     console.log("result");
  //     this.alert=true})
  //     if(this.userRegisterForm.valid){
  //       this.formDirective.resetForm(); 
  //       this.openSnackBar()
  //     }
  // }

  userRegister(){
  let er:employeeRegistration = new employeeRegistration(); 
  Object.assign(er, this.userRegisterForm.value);
  console.log(er);
  this.http.post("http://localhost:9900/api/auth/register",er).subscribe((result) => {
    console.log("result");
    this.alert=true})
    if(this.userRegisterForm.valid) {
      this.formDirective.resetForm(); 
      this.openSnackBar();
    }
 
  }


openSnackBar() {
  this._snackBar.open('Register Successfully!!', 'End', {
    duration: 500,
  
  });
}


get f() { return this.userRegisterForm.controls; }
}
