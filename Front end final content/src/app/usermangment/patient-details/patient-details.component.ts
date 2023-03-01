import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from 'src/app/services/profile.service';




@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit{
  step:any = 1;
  role:any|null;
  authUserObj: any;
  email:any; 
  authUser:any;
  parsedAuthUserObj:any;
  result:any;
  err: any;
  

 
  public profileData: Array<any> = [];

  
  constructor(private fb: FormBuilder,private http: HttpClient,
    private profileSVC:ProfileService) {}

  multistep = new FormGroup({
    patientDetails : new FormGroup({
      title : new FormControl(''),
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      dateOfBirth : new FormControl(''),
      age : new FormControl(''),
      gender : new FormControl(''),
      race : new FormControl(''),
      ethnicity : new FormControl(''),
      languagesKnown : new FormControl(''),
      email : new FormControl(''),
      contactNumber : new FormControl('')
     }),
     address: new FormGroup({
      street : new FormControl(''),
      city : new FormControl(''),
      state : new FormControl(''),
      country : new FormControl(''),
      postalCode : new FormControl('')
     }),
     kin : new FormGroup({
      title : new FormControl(''),
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      relationship : new FormControl(''),
      email : new FormControl(''),
      contactNumber : new FormControl('')
     }),
     patientAllergy : new FormGroup({
      allergyRadio : new FormControl(''),
      allergyId : new FormControl(''),
      allergyType : new FormControl('')
     })
  })

  firstFormGroup:FormGroup = this.fb.group({

    // firstCtrl: ['', Validators.required]

  });
  secondFormGroup:FormGroup = this.fb.group({
    
  });
  thirdFormGroup:FormGroup = this.fb.group({
    
  });
  fourthFormGroup:FormGroup = this.fb.group({

  });
  
  ngOnInit(): void {
    this.authUser = sessionStorage.getItem('auth-user');
    if(this.authUser!==null)
     this.authUserObj = JSON.parse(this.authUser);
    this.parsedAuthUserObj = JSON.parse(this.authUserObj);
    this.email=this.parsedAuthUserObj.email
    this.profileSVC.get_patient_profile(this.email).subscribe((data) => {
      this.profileData.push(data);
      console.log("%%%%%%%%%%"+ JSON.stringify(this.profileData));
    })

  }
 

    doPatient(data:any){
    console.log(data);
      return this.http.post("http://localhost:9900/api/details/patient",data,{responseType: 'text' as 'json'}).subscribe((result)=>{
      console.log("Result",result);
      this.err='';
      this.result = result;
   },(err)=>{
     console.log(err);
     err='';
     err= 'Patient Not Registered Successfully!';
     this.err = err;
     console.log(err);
}) 

   }
}