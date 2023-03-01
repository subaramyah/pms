import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { Response } from '@angular/http'; 
// import { Observable } from 'rxjs';
// import { AuthService } from 'src/app/services/auth.service';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HospitalUsersListService {

 

  constructor(private http: HttpClient) { }

  public getNurses(){
      // return this.http.get("http://localhost:9900/api/details/all_nurses");
      return this.http.get("http://localhost:9900/api/details/all_employee");
  }
//   public getPhysician(){
//     return this.http.get("http://localhost:9900/api/details/all_physician");
// }


}