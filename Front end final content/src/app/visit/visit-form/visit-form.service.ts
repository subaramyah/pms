import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { HttpClient,HttpResponse } from '@angular/http'; 
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
//import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VisitFormService {

  authUserObj: any;

  BASE_URL:string = 'http://localhost:9900/api/visit/'
 

  constructor(private http: HttpClient,private authSrc:AuthService) { }

  search(keyword:any):any{
    return this.http.get(this.BASE_URL + 'search/', keyword);
  }

  public getDiagnosis(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:9900/api/visit/all_diagnosis");
}

public getMedication(): Observable<any[]>{
  return this.http.get<any[]>("http://localhost:9900/api/visit/all_medication");
}

public getProcedure(): Observable<any[]>{
  return this.http.get<any[]>("http://localhost:9900/api/visit/all_procedure");
}
saveVitalFrom(visitData: any): Observable<any> {
  console.warn('post data');
  return this.http.post("http://localhost:9900/api/visit/save_vital", visitData);
  }
}
