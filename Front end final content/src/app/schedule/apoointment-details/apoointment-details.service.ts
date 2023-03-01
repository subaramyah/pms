import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    'content-type': 'application/json',
    'username': 'user',
    'password': 'pass',

  })
  // observe: 'response' as 'response'
}

@Injectable({
  providedIn: 'root'
})
export class ApoointmentDetailFormService {

  constructor(private http: HttpClient) {

  }

  getAppointments(): Observable<any> {
    var x = 1
    // sessionStorage.setItem("userid",'1' )
    //  var x = sessionStorage.getItem("userId");
    //  console.log(x)
    //this.email = sessionStorage.getItem('loggedInEmail');

    return this.http.get<any>('http://localhost:9900/api/appointment/all_appointment', httpOptions);

  }
}
