import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { Response } from '@angular/http'; 
// import { Observable } from 'rxjs';
// import { AuthService } from 'src/app/services/auth.service';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonUsersListService {

 

  constructor(private http: HttpClient) { }

  public getPatients(){
      // return this.http.get("http://localhost:9900/api/details/getPatientList");
      return this.http.get("http://localhost:9900/api/details/all_patients");
  }


}