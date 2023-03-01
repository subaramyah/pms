import { HttpClient } from '@angular/common/http';
import { Component,DoCheck, OnInit,OnDestroy,ViewChild,ViewEncapsulation,ElementRef, HostListener, } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyErrorStateMatcher } from 'src/app/app.component';
import { AppointmentFormService } from './appointment-form.service';
import { appointmentForm } from './appointmentForm';
@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit  {
  public maxDate = new Date()
  alert:boolean=false;
  public error: string = "";
  appointmentForm!: FormGroup;
   matcher = new MyErrorStateMatcher();
  @ViewChild(FormGroupDirective) formDirective: any;
  email: any;
  senderList: any = {};
  physician: any;

 
 constructor(private formBuilder: FormBuilder,
  private _snackBar: MatSnackBar,
  private http: HttpClient,private appointmentFormService:AppointmentFormService) {}

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
     
      appointmentTitle: ['', Validators.required],
      physician: ['', [ Validators.required, Validators.minLength(3)]],
      appointmentDate: ['',  Validators.required],
      appointmentTime: ['', Validators.required],
      meetingDescription: ['',Validators.required]
      
      
  });

  this.appointmentFormService.getSenderDetails().subscribe((dropdown) => {
    console.log(dropdown);
    this.senderList = dropdown}); 

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

  onSubmit(){
  let as:appointmentForm = new appointmentForm(); 
  Object.assign(as, this.appointmentForm.value);
  console.log(as);
  this.email = sessionStorage.getItem('loggedInEmail');
  alert(this.email);
  this.http.post("http://localhost:9900/api/appointment/save_appointment/"+this.email,as).subscribe((result) => {
    console.log("result");
   
    this.alert=true})
    if(this.appointmentForm.valid) {
      this.formDirective.resetForm(); 
      this.openSnackBar();
    }
 
  }


openSnackBar() {
  this._snackBar.open('Booked Appointment', 'End', {
    duration: 500,
  
  });
}


get f() { return this.appointmentForm.controls; }
}


 


