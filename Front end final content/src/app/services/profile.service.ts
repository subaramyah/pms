import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

// import {DELETE_USER} from '../config/URL.config'
// import {GET_ALL_ALLERGY_MASTER_TABLE} from '../config/URL.config'
// import {GET_ALL_LANGUAGES_MASTER_TABLE} from '../config/URL.config'
// import {DELET_HOSPITAL_USER} from '../config/URL.config'
 import { GET_PROFILE_URL} from '../config/URL.config'
// import {GET_HOSPITAL_USER_PROFILE} from '../config/URL.config'
// import {EDIT_HOSPITAL_USER_PROFILE} from '../config/URL.config'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 

  constructor(private http: HttpClient) { }

  get_patient_profile(email:any): Observable<any>{

    return this.http.get<any>('http://localhost:9900/api/details/patient_details/'+email,email);
   } 

   get_hospital_user_profile(userId:any): Observable<any>{

    return this.http.get<any>("GET_HOSPITAL_USER_PROFILE"+userId,userId);
   }

   public edit_hospital_user(userdata: any,userId:any): Observable<any>
   {
     return this.http.put<any>("EDIT_HOSPITAL_USER_PROFILE"+userId, userdata,userId);
   }

  deleteUser(pateintid:any){
    // return this.http.delete(DELETE_USER+pateintid,pateintid);
  }

  deleteHospitalUser(userId:any){
    // return this.http.delete(DELET_HOSPITAL_USER+userId,userId);
  }

  
  getAllergys(): Observable<any>{

    return this.http.get<any>("GET_ALL_ALLERGY_MASTER_TABLE");
   } 
 

   getLanguages(): Observable<any>{

    return this.http.get<any>("GET_ALL_LANGUAGES_MASTER_TABLE");
   } 



}
