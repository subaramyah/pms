import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {PUT_PATIENT_DETAIL_URL} from '../config/URL.config'
//import{EDIT_PATIENT_URL} from '../config/URL.config'


@Injectable({
  providedIn: 'root'
})
export class EditPatientDetailsService {


  constructor(private http: HttpClient) { }

  public patient(userdata: any,userId:any): Observable<any>
  {
    return this.http.put<any>("PUT_PATIENT_DETAIL_URL"+userId, userdata,userId);
  }
  // public edit_patient(userdata: any): Observable<any>
  // {
  //   return this.http.put<any>(EDIT_PATIENT_URL, userdata);
  // }

}
