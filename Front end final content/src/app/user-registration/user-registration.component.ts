import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  role = 'ROLE_PATIENT';
  result:any;
  err: any;


  constructor(private http: HttpClient) { }
  optionsSelect: Array<any> = [];

    ngOnInit() {


  }
  hide = true;

onSubmit(data:any){
  console.log(data);
  return this.http.post("http://localhost:9900/api/auth/register",data,{responseType: 'text' as 'json'}).subscribe((result)=>{
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
