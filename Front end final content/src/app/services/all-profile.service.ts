import { Injectable } from '@angular/core';
import {GET_All_PROFILE_URL} from '../config/URL.config'
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {GET_ALL_HOSPITAL_USER} from'../config/URL.config'

@Injectable({
  providedIn: 'root'
})
export class AllProfileService {

  constructor(private http: HttpClient) { }

  getAllprofiles(): Observable<any[]>{

    return this.http.get<any[]>(GET_All_PROFILE_URL);
   } 

   getAllHospitalUserprofiles(): Observable<any[]>{

    return this.http.get<any[]>(GET_ALL_HOSPITAL_USER);
   } 
  // getAllprofiles(): any {

  //   //console.warn('medication data');
  //   return this.http.get(GET_All_PROFILE_URL);
  // }
}
