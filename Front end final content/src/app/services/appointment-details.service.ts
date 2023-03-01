import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { APPOINTMENT_DETAILS_URL} from '../config/URL.config';
// import {PeriodicElement} from '../modules/schedule/apoointment-details/appointment'
import { DataSource } from '@angular/cdk/table';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    'content-type': 'application/json',
    

  })
  // observe: 'response' as 'response'
}
@Injectable({
  providedIn: 'root'
})
export class AppointmentDetailsService {

  constructor(private http: HttpClient) { }

  

   getAppointmentDetails(): Observable<any[]>
  {
    console.warn("In user appointment details service");
   // console.warn(this.http.get(APPOINTMENT_DETAILS_URL));
   return this.http.get<any[]>("APPOINTMENT_DETAILS_URL",httpOptions);
   
  }
}
